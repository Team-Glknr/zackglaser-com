// Speaking-page booking form — docs/01-site-brief.md §8: must notify
// immediately by email, zero friction, no accounts, no multi-step.
// On-demand route (not prerendered) so it can run server-side with a
// secret API key; everything else on the site stays static.
export const prerender = false;

import type { APIRoute } from "astro";

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const fromEmail = import.meta.env.BOOKING_FROM_EMAIL;
  const toEmail = import.meta.env.BOOKING_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Booking form misconfigured: missing RESEND_API_KEY, BOOKING_FROM_EMAIL, or BOOKING_TO_EMAIL");
    return json({ error: "The booking form isn't set up yet — email directly instead." }, 500);
  }

  let data: { event?: string; date?: string; email?: string };
  try {
    data = await request.json();
  } catch {
    return json({ error: "That didn't come through right — try again." }, 400);
  }

  const event = (data.event ?? "").trim().slice(0, 200);
  const date = (data.date ?? "").trim().slice(0, 200);
  const email = (data.email ?? "").trim().slice(0, 320);

  if (!email || !email.includes("@")) {
    return json({ error: "A valid email is required." }, 400);
  }

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject: `Speaking inquiry${event ? `: ${event}` : ""}`,
      text: [`Event / show: ${event || "(not given)"}`, `Date: ${date || "(not given)"}`, `Email: ${email}`].join("\n"),
    }),
  });

  if (!resendRes.ok) {
    console.error("Resend send failed:", resendRes.status, await resendRes.text());
    return json({ error: "Couldn't send — try again in a moment, or email directly." }, 502);
  }

  return json({ ok: true }, 200);
};

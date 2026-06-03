import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, reason, message } = await req.json()

    if (!name || !email || !reason || !message) {
      return Response.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "Amanah Scholars <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "ismohamu@umich.edu",
      replyTo: email,
      subject: `New Amanah Scholars Contact Form: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Reason:</strong> ${escapeHtml(reason)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)

      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      )
    }

    return Response.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Contact form error:", error)

    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unable to send message.",
      },
      { status: 500 }
    )
  }
}

import {
    Resend
} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

    try {
        const {
            name,
            email,
            company,
            phone,
            challenges
        } = req.body;

        if (!name || !email || !challenges) {
            return res.status(400).json({
                message: "Name, email, and message are required.",
            });
        }

        await resend.emails.send({
            from: "Bloom Advisors <no-reply@bloomadvisors.uk>",
            to: "kwesi@bloomadvisors.uk",
            replyTo: email,
            subject: `New Contact Form Submission from ${name} - ${company || "No company"}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <hr />
        <p><strong>What's not working:</strong></p>
        <p>${challenges}</p>
      `,
        });

        return res.status(200).json({
            success: true,
            message: "Message sent successfully.",
        });
    } catch (error) {
        console.error("Contact form error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to send message.",
        });
    }
}
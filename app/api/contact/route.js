import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { firstName, lastName, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: {
        name: `${firstName} ${lastName}, ${email}`,
        address: process.env.SMTP_USER,
      },
      replyTo: email,
      to: process.env.CONTACT_TO,
      subject: `New message from ${firstName} ${lastName}`,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

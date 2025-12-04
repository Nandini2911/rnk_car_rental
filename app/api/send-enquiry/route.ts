// app/api/send-enquiry/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // important for nodemailer

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      mobileNumber,
      startDate,
      passengers,
      pickupCity,
      vehicle,
    } = body;

    if (!fullName || !email || !mobileNumber) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Optional: check connection
    await transporter.verify();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "nandaniyadav521@gmail.com",
      subject: `New RNK enquiry from ${fullName}`,
      html: `
        <h2>New RNK City Enquiry</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        <p><strong>Start Date:</strong> ${startDate}</p>
        <p><strong>Number of Passengers:</strong> ${passengers}</p>
        <p><strong>Pickup City:</strong> ${pickupCity}</p>
        <p><strong>Vehicle:</strong> ${vehicle}</p>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending enquiry email:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

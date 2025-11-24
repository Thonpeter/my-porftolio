import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = 'thonawangjr@gmail.com';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP not configured. Missing environment variables.');
      return NextResponse.json(
        { 
          message: 'Email service not configured. Please contact thonawangjr@gmail.com directly.',
          error: 'SMTP_NOT_CONFIGURED'
        },
        { status: 503 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // For development, set to true in production with valid cert
      },
    });

    // Verify connection
    await transporter.verify();

    // Send email
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact Form: ${name}`,
      text: `
New contact form submission from your portfolio:

Name: ${name}
Email: ${email}

Message:
${message}

---
You can reply directly to this email to respond to ${name} at ${email}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #111827;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
          </div>
          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #4f46e5; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #111827; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      message: 'Message sent successfully',
      success: true 
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Error sending message. Please try again later.';
    let statusCode = 500;

    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check SMTP credentials.';
      statusCode = 401;
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server. Please check SMTP settings.';
      statusCode = 503;
    } else if (error.response) {
      errorMessage = `Email server error: ${error.response}`;
    }

    return NextResponse.json(
      { 
        message: errorMessage,
        error: error.code || 'UNKNOWN_ERROR',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: statusCode }
    );
  }
}


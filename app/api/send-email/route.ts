import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'


export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER, // sender address
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER, // receiver address
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Name:</strong> 
              <span style="color: #333;">${name}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Email:</strong> 
              <span style="color: #333;">${email}</span>
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Message:</strong>
            </p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #06b6d4;">
              <p style="color: #333; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
      replyTo: email, // Allow replying directly to the sender
    }

    // Verify connection before sending
    await transporter.verify()
    console.log('SMTP connection verified successfully')

    // Send email
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)
    
    // Provide more detailed error message
    let errorMessage = 'Failed to send email'
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check your email credentials.'
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Cannot connect to email server. Please check SMTP host and port.'
    }
    
    return NextResponse.json(
      { error: errorMessage, details: error.message },
      { status: 500 }
    )
  }
}


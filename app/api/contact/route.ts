import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'Takeout Media <onboarding@resend.dev>', // You should update this with a verified domain later
            to: process.env.CONTACT_EMAIL || 'info@takeoutmedia.xyz',
            subject: subject || `New Inquiry from ${name}`,
            reply_to: email,
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}

Message:
${message || 'No message provided.'}
            `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

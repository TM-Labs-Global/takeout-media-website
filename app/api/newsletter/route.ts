import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'Takeout Media <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL || 'info@takeoutmedia.xyz',
            subject: 'New Newsletter Subscription',
            text: `A new user has subscribed to the newsletter: ${email}`,
        });

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

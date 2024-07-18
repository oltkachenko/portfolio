import { Contact } from '@/components/emails/Contact';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
    const data = await req.json();
    const { name, email, subject, message } = data;

    try {
        const { data, error } = await resend.emails.send({
            from: `${name} <portfolio@resend.dev>`,
            to: [`${process.env.RESEND_EMAIL_TO}`],
            subject: subject,
            react: Contact({ 
                firstName: name,
                message,
                email
            }),
            text: message
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
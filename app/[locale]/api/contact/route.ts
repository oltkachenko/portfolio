import getTranslation from "@/helpers/getTranslation";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    const translations = await getTranslation("ContactForm", [
        'generalErrors.emptyField',
        'generalErrors.messageSent',
        'generalErrors.failed',
    ])

    const data = await req.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
        return NextResponse.json(
            {
                message: translations.generalErrors.emptyField,
            },
            { status: 400 }
        );
    }

    try {
        const newContact = await client.create({
            _type: "contactForm",
            name,
            email,
            subject,
            message
        });
        return NextResponse.json(
            { message: translations.generalErrors.messageSent, commet: newContact },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: translations.generalErrors.failed, error },
            { status: 500 }
        );
    }
}
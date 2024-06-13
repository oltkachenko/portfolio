import getTranslation from "@/helpers/getTranslation";
import { i18n } from "@/i18n.config";
import { client } from "@/sanity/lib/client";
import { getLocale } from "next-intl/server";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    const locale = await getLocale();
    const localeTitle = i18n.locales.find(loc => locale === loc.id)?.title || locale;
    
    const translations = await getTranslation("ContactForm", [
        'generalErrors.emptyField',
        'generalErrors.messageSent',
        'generalErrors.failed',
    ])

    const data = await req.json();
    const { name, email, subject, message } = data;

    const date = new Date().toLocaleString('uk-UA');

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
            message,
            date,
            locale: localeTitle
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
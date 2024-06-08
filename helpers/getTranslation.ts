import { getTranslations } from "next-intl/server";

async function getTranslation(tranlationGroup: string, tranlationItems: string[]) {
    const t = await getTranslations(tranlationGroup);

    const translations: Record<string, any> = {}

    tranlationItems.forEach(element => {
        const structure = element.split('.');

        if (structure.length === 1) {
            translations[element] = t(element)
        } else {
            translations[structure[0]] = translations[structure[0]] || {}

            translations[structure[0]][structure[1]] = t(element)
        }
    });

    return translations
}

export default getTranslation;
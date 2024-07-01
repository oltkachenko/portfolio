import { useTranslations } from 'next-intl'

interface Props {
    category: string
}

export default function Category({ category }: Props ) {
    const t = useTranslations('ProjectCategory')
    
    switch(category) {
        case 'web-development':
            return t('web-development')
        case 'branding':
            return t('branding')
        default:
            return null;
    }
}

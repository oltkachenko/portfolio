import Logo from '@/components/common/header/Logo'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
 
export default function NotFound() {
    const t = useTranslations('NotFound')

    return (
        <div className='error_page'>
            <Logo />
            <main className='error_page-container'>
                <h1 className='error_page-title'>{t('title')}</h1>
                <h2 className='error_page-subtitle'>{t('subtitle')}</h2>

                <Link href="/" className='button error_page-button'>
                    {t('buttonName')}
                </Link>
            </main>
            
        </div>
    )
}
import { useTranslation } from '@/app/i18n'

export default async function SavedMeals({ params: { lng } }) {
    const { t } = await useTranslation(lng, ['glossary', 'common'])
    return (
        <>
            <h1>{t('glossary:saved_button')}</h1>
            <p>en potatis</p>
            <button>taborticon</button>
        </>
    )
}
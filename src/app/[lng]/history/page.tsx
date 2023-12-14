import styles from './page.module.css'
import { HistoryCard } from '../components/storyBookComponents/history/historyCard'
import { useTranslation } from '@/app/i18n'

export default async function History({ params: { lng } }) {
    const { t } = await useTranslation(lng, ['glossary', 'common'])
    return (
        <main>

            <div className={styles.prison}>

                <h1 className={styles.title}>{t('glossary:history_title')}</h1>

                <p className={styles.undertext}>{t('glossary:history_desc')}</p>
            </div>

            <HistoryCard></HistoryCard>


        </main>
    )
}
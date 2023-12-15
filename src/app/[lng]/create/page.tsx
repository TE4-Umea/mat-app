import styles from './page.module.css'
import { HistoryCard } from '../components/storyBookComponents/history/historyCard'
import { useTranslation } from '@/app/i18n'

export default async function History({ params: { lng } }) {
    const { t } = await useTranslation(lng, ['glossary', 'common'])
    return (
        <main>

            <div className={styles.bg}>
                <div></div>

                <div>
                    <input className={styles.name} id={styles.placeholder} type="text" placeholder={t('common:name')} />
                </div>


                <div id={styles.flex}>
                    <div className={styles.info}><p>{t('common:additional')}</p></div>
                    <div className={styles.info2}><p>({t('common:optional')})</p></div>
                </div>



                <div>
                    <input className={styles.name2} id={styles.placeholder2} type="text" placeholder={t('glossary:type_here')} />
                </div>

                <div className={styles.iconTitle}><p>{t('glossary:icon_choice')}</p></div>

            </div>



        </main>
    )
}
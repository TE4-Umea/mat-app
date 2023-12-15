import styles from './page.module.css'
import { useTranslation } from '@/app/i18n'

export default async function food({ params: { lng } }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, ['glossary', 'common'])
    return (
        <div className={styles.bg}>
            <h1 className={styles.title}>Kebabpitabred</h1>
            <p className={styles.save}>{t('glossary:add_saved')}</p>

            <div className={styles.text1}><p>{t('glossary:last_time')}</p></div>
            <div className={styles.text2}><p>November 34</p></div>
            <div className={styles.text11}><p>{t('glossary:amount_eat')}</p></div>
            <div className={styles.text22}><p>1 {t('glossary:times')}</p></div>

            <div className={styles.mealtid}><p>{t('glossary:meal_history')}</p></div>

            <div className={styles.bak1} id={styles.flex}>
                <div className={styles.tex}><p>Måndag 13/11</p></div>
                <div className={styles.del}><p>Lunch</p></div>
            </div>

            <div className={styles.bak2} id={styles.flex}>
                <div className={styles.tex}><p>Måndag 13/11</p></div>
                <div className={styles.del}><p>Middag</p></div>
            </div>

            <div className={styles.bak1} id={styles.flex}>
                <div className={styles.tex}><p>Tisdag 14/11</p></div>
                <div className={styles.del}><p>Lunch</p></div>
            </div>
        </div>



    )
}
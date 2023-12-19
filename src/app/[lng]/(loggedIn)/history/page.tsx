
import styles from './page.module.css'
import { HistoryCard } from '../../components/storyBookComponents/history/historyCard'
import { useTranslation } from '@/app/i18n'
import { MealProvider } from '../../components/backendComponents/dropDown/MealContext';

export default async function History({ params: { lng } }) {
    const { t } = await useTranslation(lng, ['glossary', 'common'])
    const date = new Date();
    const today = date.getMonth() + 1;
    const todayaswell = date.getDate();
    const data = [1, 2, 3, 4, 5, 6, 7]

    const getDayOfWeek = (date, offset) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + offset);
        return newDate.toLocaleString('default', { weekday: 'long' });
    };

    return (
        <main>
            <MealProvider currentDay={""}>

                <div className={styles.prison}>

                    <h1 className={styles.title}>{t('glossary:history_title')}</h1>

                    <p className={styles.undertext}>{t('glossary:history_desc')}</p>
                </div>

                {data.map((offset) => (
                    <HistoryCard
                        key={offset}
                        today={today}
                        todayaswell={todayaswell + offset - 1}
                        currentDay={getDayOfWeek(date, offset - 1)}
                    ></HistoryCard>
                ))}
            </MealProvider>


        </main>
    )
}
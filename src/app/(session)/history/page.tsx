import styles from './page.module.css'
import { HistoryCard } from '../../components/storyBookComponents/cards/history/historyCard'
import { MealProvider } from '../../components/backendComponents/dropDown/MealContext'; 
import { WeekPlan } from '../../components/storyBookComponents/cards/WeekPlan/WeekPlan'; // Update the path accordingly

export default function History() {
    return (
        <main>
          <MealProvider>
            <div className={styles.prison}>
              <h1 className={styles.title}>Historik</h1>
              <p className={styles.undertext}>Måltider du har haft</p>
            </div>
            <HistoryCard></HistoryCard>
          </MealProvider>
        </main>
      );
}
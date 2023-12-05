import styles from './page.module.css'
import { Card as HistoryCard } from '../../components/storyBookComponents/cards/history/historyCard'

export default function History() {
    return (
        <main>

            <div className={styles.prison}>

                <h1 className={styles.title}>Historik</h1>

                <p className={styles.undertext}>Måltider du har haft</p>
            </div>

            <HistoryCard></HistoryCard>

        </main>
    )
}
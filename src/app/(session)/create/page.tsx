import styles from './page.module.css'
import { HistoryCard } from '../../components/storyBookComponents/cards/history/historyCard'

export default function History() {
    return (
        <main>

            <div className={styles.bg}>
                <div></div>

                <div>
                    <input className={styles.name} id={styles.placeholder} type="text" placeholder='Namn..' />
                </div>
                

                <div id={styles.flex}>
                    <div className={styles.info}><p>Ytterligare information</p></div>
                    <div className={styles.info2}><p>(frivilligt)</p></div>
                </div>

                

                <div>
                    <input className={styles.name2} id={styles.placeholder2} type="text" placeholder='Skriv aehsaer...' />
                </div>
                
                <div className={styles.iconTitle}><p>välj icon för maträtten</p></div>

            </div>

            

        </main>
    )
}
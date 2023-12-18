import styles from './page.module.css'
import { StatsBar } from '../../components/storyBookComponents/statsBar/statsBar'


export default function food({ params: { lng } }) {
    return (


        <div className={styles.bg}>


            {/* <StatsBar lng={lng} label={"Kebabpizza"} times={500} percent={80}></StatsBar> */}

            <div className={styles.mealtid}><p>Måltidshistorik</p></div>

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
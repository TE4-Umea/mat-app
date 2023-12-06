import styles from './page.module.css'

export default function History() {
    return (

        <div className={styles.prison}>
            <div className={styles.flex}>
            <div className={styles.title}><h1 >Skål i mat</h1></div>
            <div className={styles.speech}><p>*fågel ljud*</p></div>
            </div>

            
            <div className={styles.undertext}><p >Lägg till i sparade</p></div>

            <div className={styles.tabort}>
            <div id={styles.flex}>
                <div>
                    <div className={styles.textTitle}><h3>Ingredienser</h3></div>
                    <div className={styles.text}><li className={styles.li}>Mat</li> <li className={styles.li}>Skål</li> <li className={styles.li}>Glädje</li> <li className={styles.li}>Kärlek</li></div>
                </div>

                <div>
                    <div className={styles.textTitle2}><h3> Instruktioner</h3></div>
                    <div className={styles.text2}><p>Placera met i skålen.</p></div>
                </div>
                </div>

                <div className={styles.lik}><p>Liknande rätter</p></div>
            </div>
        </div>

    )
}
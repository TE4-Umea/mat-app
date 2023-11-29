import styles from './page.module.css'

export default function food() {
    return (

        
        <div className={styles.bg}>
            <h1 className={styles.title}>Kebabpitabred</h1>
            <p className={styles.spara}>Lägg till i sparade</p>

            <div className={styles.text1}><p>Sist du hade detta var</p></div>
            <div className={styles.text2}><p>November 34</p></div>
            <div className={styles.text11}><p>Du har ätit detta</p></div>
            <div className={styles.text22}><p>1 gång</p></div>

            <div className={styles.måltid}><p>Måltidshistorik</p></div>

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
import styles from './page.module.css'


export default function food() {
    return (

        
        <div className={styles.bg}>
            
            
            

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
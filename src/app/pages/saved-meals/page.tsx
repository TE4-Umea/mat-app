import styles from '../saved-meals/page.module.css'

export default function Meals() {
    return (
        <main>
            <ul className={styles.ul}>
                <li>
                    En potatis
                </li>
                <li>
                    En köttbulle
                </li>
            </ul>
        </main>
    )
}
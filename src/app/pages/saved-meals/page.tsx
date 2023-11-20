import styles from '../saved-meals/page.module.css'

export default function SavedMeals() {
    return (
        <main>
            <h1>Saved Meals</h1>
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
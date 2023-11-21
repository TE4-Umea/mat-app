import styles from '../saved-meals/page.module.css'

export default function SavedMeals() {
    return (
        <main>
            <h1>Sparade rätter</h1>
            <ul className={styles.ul}>
                <div>
                    <li>
                        En potatis
                    </li>
                    <button>Taborticon</button>
                </div>
                <div>
                    <li>
                        En köttbulle
                    </li>
                    <button>Taborticon</button>
                </div>
            </ul>
        </main>
    )
}
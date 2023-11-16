import styles from './page.module.css'

export default function Styleguide() {
    return (
        <main className={styles.main}>
            <h1 className={[styles.title, styles.h1].join(" ")}>Title font is &quot;var(--font-title)&quot; (Lexend Deca)</h1>
            <h2 className={[styles.title, styles.h2].join(" ")}>Under titles are &quot;var(--step-3)&quot; while the title above is &quot;var(--step-4)&quot;</h2>
            <p>This is a text body. It uses &quot;var(--font-body)&quot; (Karla) instead. The same can be said for buttons and other content that is not a title. Their sizes can vary from <span className={styles.step2}>&quot;var(--step-2)&quot;</span> and <span className={styles.stepM2}>below</span>.</p>
            <p>Below are our colors.</p>
            <div className={styles.colorbg}>Background color</div>
            <div className={styles.colorfg}>Foreground color</div>
            <div className={styles.colorpr}>Primary color</div>
            <div className={styles.colorse}>Secondary color</div>
            <div className={styles.colorte}>Color for alternate background</div>
            <div className={styles.colorde}>Color for warning or deletion</div>
            <div className={styles.colorgr}>Gradient colors</div>
            <p>Shadows!</p>
            <div className={styles.shadowBox1}>Shadow on colors other than alternate background</div>
            <div className={styles.shadowBox2}>Shadow on alternate background</div>
            <p>Cards and buttons have a border radius of 12px. Usually their padding is &quot;var(--space-xs)&quot;.</p>
            <button className={styles.button}>Button</button>
            <button className={styles.button}>Button</button>
            <p>The margin between two adjoining components should be &quot;var(--space-2xs)&quot;.</p>
            <p className={styles.margin}>The margin between two different groups of components/components should be &quot;var(--space-2xl)&quot;.</p>
        </main>
    )
}
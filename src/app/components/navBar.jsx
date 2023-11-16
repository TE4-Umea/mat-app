import styles from './navBar.module.css';

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <button>Hem</button>
            <button>Planering</button>
            <button>Historik</button>
            <button>Profil</button>
        </div>
    )
}
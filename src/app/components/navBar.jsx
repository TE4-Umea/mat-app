import styles from './navBar.module.css';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <Link
                href="/"
            //   className=
            >
                <span className="">Hem</span>{' '}
            </Link>
            <Link
                href="/pages/planering"
            //   className=
            >
                <span className="">Planering</span>{' '}
            </Link>
            <Link
                href="/pages/historik"
            //   className=
            >
                <span className="">Historik</span>{' '}
            </Link>
            <Link
                href="/pages/profil"
            //   className=
            >
                <span className="">Profil</span>{' '}
            </Link>
        </nav>
    )
}
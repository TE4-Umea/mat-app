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
                href="/pages/planning"
            //   className=
            >
                <span className="">Planering</span>{' '}
            </Link>
            <Link
                href="/pages/history"
            //   className=
            >
                <span className="">Historik</span>{' '}
            </Link>
            <Link
                href="/pages/profile"
            //   className=
            >
                <span className="">Profil</span>{' '}
            </Link>
        </nav>
    )
}
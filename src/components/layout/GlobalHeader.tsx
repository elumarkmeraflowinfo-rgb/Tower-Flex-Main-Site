import Link from 'next/link';
import styles from './GlobalHeader.module.css';

export default function GlobalHeader() {
    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
                TOWERFLEX ECOSYSTEM
            </Link>
            <div className={styles.links}>
                <Link href="/construction" className={styles.link}>TOWERFLEX</Link>
                <Link href="/listone" className={styles.link}>LISTONE</Link>
                <Link href="/containers" className={styles.link}>CONTAINERS</Link>
                <Link href="/steel" className={styles.link}>STEEL</Link>
            </div>
        </nav>
    );
}

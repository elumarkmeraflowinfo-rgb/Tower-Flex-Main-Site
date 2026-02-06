'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import styles from './GlobalHeader.module.css';

export default function GlobalHeader() {
    const pathname = usePathname();
    const { playClick } = useSoundEffects();

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={() => playClick()}>
                    <span className={styles.logoMain}>TOWERFLEX</span>
                    <span className={styles.logoSub}>ECOSYSTEM</span>
                </Link>

                <div className={styles.links}>
                    {[
                        { name: 'Gateway', path: '/' },
                        { name: 'Construction', path: '/construction' },
                        { name: 'Editorial', path: '/listone' },
                        { name: 'Steelworks', path: '/steel' },
                    ].map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${styles.link} ${pathname === item.path ? styles.active : ''}`}
                            onClick={() => playClick()}
                        >
                            {item.name}
                            {pathname === item.path && (
                                <motion.div
                                    layoutId="nav-active"
                                    className={styles.activeIndicator}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                <div className={styles.status}>
                    <div className={styles.statusDot} />
                    <span>System: Active</span>
                </div>
            </div>
        </nav>
    );
}

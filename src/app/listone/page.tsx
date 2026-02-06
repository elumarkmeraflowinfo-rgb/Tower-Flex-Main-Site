'use client';

import PiPVideo from '@/components/features/PiPVideo';
import TextReveal from '@/components/ui/TextReveal';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function ListonePage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={styles.kicker}
                >
            /// THE SUSTAINABILITY REPORT
                </motion.span>
                <TextReveal text="LIQUID ARCHITECTURE" className={styles.title} />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className={styles.meta}
                >
                    WRITTEN BY ANALYSIS_BOT // FEB 2026 // READ TIME: 04M
                </motion.p>
            </header>

            <div className={styles.videoSection}>
                <PiPVideo />
            </div>

            <div className={styles.article}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className={styles.content}
                >
                    <p className={styles.dropcap}>
                        TOWERFLEX IS NOT A BUILDING; IT IS A PROGRAMMABLE ENVIRONMENT.
                        By decoupling structural integrity from spatial definition, we allow users to reconfigure their
                        living spaces in real-time. This is the dawn of adaptive habitat optimization.
                    </p>
                    <p>
                        Traditional architecture is rigid, locked into the physical constraints of its era.
                        Liquid Architecture, powered by our High-Tensile Centers and Modular Shells,
                        creates a vertical ecosystem where walls are merely software settings.
                    </p>
                    <p>
                        In our latest deployment at Sector 7G, we observed a 40% increase in spatial utilization
                        efficiency through automated reconfiguration. The building literally breathes with its occupants.
                    </p>
                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className={styles.sidebar}
                >
                    <span className={styles.sidebarTitle}>Key Insights</span>
                    <blockquote className={styles.quote}>
                        "Static architecture is a relic. The city of the future is a living, thinking organism."
                    </blockquote>
                    <div className="space-y-4 font-mono text-[10px] uppercase tracking-widest opacity-60">
                        <div className="flex justify-between border-b border-black/5 pb-2">
                            <span>Adaptive Speed</span>
                            <span>120m/s</span>
                        </div>
                        <div className="flex justify-between border-b border-black/5 pb-2">
                            <span>Carbon Offset</span>
                            <span>94%</span>
                        </div>
                        <div className="flex justify-between border-b border-black/5 pb-2">
                            <span>Neural Sync</span>
                            <span>ENABLED</span>
                        </div>
                    </div>
                </motion.aside>
            </div>
        </div>
    );
}

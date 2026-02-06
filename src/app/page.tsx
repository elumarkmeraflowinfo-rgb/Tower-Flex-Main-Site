'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import TextReveal from '@/components/ui/TextReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import styles from './page.module.css';

const WORLDS = [
  {
    id: 'towerflex',
    name: 'AUTHORITY',
    title: 'TOWERFLEX',
    path: '/construction',
    color: '#FF4D00',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    desc: 'BIM 3D CONSTRUCTION SYSTEM'
  },
  {
    id: 'listone',
    name: 'INFLUENCER',
    title: 'LISTONE',
    path: '/listone',
    color: '#2962FF',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    desc: 'FUTURE LIVING EDITORIAL'
  },
  {
    id: 'containers',
    name: 'PRODUCT',
    title: 'LOGISTICS',
    path: '/containers',
    color: '#10B981',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    desc: 'MODULAR HABITAT UNITS'
  },
  {
    id: 'steel',
    name: 'FACTORY',
    title: 'STEELWORKS',
    path: '/steel',
    color: '#FACC15',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5f560f1c?auto=format&fit=crop&q=80&w=1200',
    desc: 'AUTOMATED FABRICATION'
  },
];

export default function Gateway() {
  return (
    <div className={styles.container}>
      <header className={styles.heroSection}>
        <div className="flex flex-col">
          <TextReveal
            text="ECOSYSTEM"
            className={styles.title}
            delay={0.2}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className={styles.subtitle}
          >
            / ADVANCED ARCHITECTURAL OPERATING SYSTEM<br />
            / VER. 2.2_STABLE // SECTOR 7G
          </motion.p>
        </div>
      </header>

      <div className={styles.grid}>
        {WORLDS.map((world, index) => (
          <motion.div
            key={world.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <Link
              href={world.path}
              className={styles.card}
              style={{ '--card-color': world.color } as any}
            >
              <div
                className={styles.cardBackground}
                style={{ backgroundImage: `url(${world.image})` }}
              />
              <div className={styles.cardOverlay} />

              <div className={styles.cardContent}>
                <span className={styles.cardTag}>[{world.name}]</span>
                <h2 className={styles.cardTitle}>{world.title}</h2>
                <div className={styles.cardFooter}>
                  <p className="text-xs font-mono tracking-widest">{world.desc}</p>
                  <MagneticButton>
                    <div className={styles.arrow} style={{ color: world.color }}>
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </MagneticButton>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

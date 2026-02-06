import Link from 'next/link';
import MagneticButton from '@/components/ui/MagneticButton';
import styles from './page.module.css';

const WORLDS = [
  { id: 'towerflex', name: 'TOWERFLEX', path: '/construction', color: '#FF4D00', desc: 'AUTHORITY' },
  { id: 'listone', name: 'LISTONE', path: '/listone', color: '#2962FF', desc: 'INFLUENCER' },
  { id: 'containers', name: 'CONTAINERS', path: '/containers', color: '#10B981', desc: 'PRODUCT' },
  { id: 'steel', name: 'STEEL', path: '/steel', color: '#FACC15', desc: 'FACTORY' },
];

export default function Gateway() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          ECOSYSTEM
        </h1>
      </div>

      <div className={styles.grid}>
        {WORLDS.map((world) => (
          <Link key={world.id} href={world.path} className={styles.card}>
            <div className={styles.cardBg} style={{ color: world.color }} />

            <div className={styles.cardContent}>
              <span className={styles.cardDesc}>{world.desc}</span>
              <h2 className={styles.cardTitle}>{world.name}</h2>

              <div className={styles.magneticWrapper}>
                <MagneticButton>
                  <div className={styles.iconWrapper}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </MagneticButton>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

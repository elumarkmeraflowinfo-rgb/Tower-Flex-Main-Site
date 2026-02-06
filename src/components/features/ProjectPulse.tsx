'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './ProjectPulse.module.css';

interface Phase {
    id: string;
    name: string;
    progress: number;
    status: 'active' | 'pending' | 'completed';
}

const INITIAL_PHASES: Phase[] = [
    { id: '1', name: 'Foundation Pouring', progress: 100, status: 'completed' },
    { id: '2', name: 'Structural Steel', progress: 65, status: 'active' },
    { id: '3', name: 'Facade Glazing', progress: 12, status: 'active' },
    { id: '4', name: 'Interior Fitout', progress: 0, status: 'pending' },
];

export default function ProjectPulse() {
    const [phases, setPhases] = useState(INITIAL_PHASES);

    // Simulate live telemetry updates
    useEffect(() => {
        const interval = setInterval(() => {
            setPhases(current =>
                current.map(p => {
                    if (p.status === 'active') {
                        // Random micro-increment
                        const increment = Math.random() * 0.5;
                        return { ...p, progress: Math.min(p.progress + increment, 99) };
                    }
                    return p;
                })
            );
        }, 2000); // Update every 2s

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.pane}>
            <div className={styles.header}>
                <span className={styles.title}>Project Telemetry</span>
                <div className={styles.liveIndicator}>
                    <div className={styles.pulseDot} />
                    Live
                </div>
            </div>

            <div>
                {phases.map(phase => (
                    <div key={phase.id} className={styles.row}>
                        <div className={styles.labelRow}>
                            <span>{phase.name}</span>
                            <span className="font-mono">{phase.progress.toFixed(1)}%</span>
                        </div>
                        <div className={styles.progressBarTrack}>
                            <motion.div
                                className={styles.progressBarFill}
                                initial={{ width: 0 }}
                                animate={{ width: `${phase.progress}%` }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    backgroundColor: phase.status === 'completed' ? '#10B981' : phase.status === 'pending' ? '#52525B' : '#FF4D00'
                                }}
                            />
                        </div>
                        {phase.status === 'active' && (
                            <span className={styles.status}>/// Awaiting sensor data...</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

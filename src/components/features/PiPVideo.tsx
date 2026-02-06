'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// We'll use inline styles or a generic CSS module for this feature too.
// Let's rely on standard styles or create a module if complex.
// The Vite version used module. Let's create `PiPVideo.module.css` in same folder? 
// Or better `src/styles/PiPVideo.module.css` or colocated. 
// Next.js supports colocated CSS modules.

import styles from './PiPVideo.module.css';

export default function PiPVideo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFloating, setIsFloating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isPlaying) {
            setIsFloating(false);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFloating(!entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [isPlaying]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    return (
        <>
            <div ref={containerRef} className={styles.wrapper}>
                {!isPlaying && !isFloating && (
                    <div className={styles.placeholder}>
                        <h1 className={styles.title}>The Story</h1>
                    </div>
                )}

                {!isFloating && (
                    <motion.div layoutId="video-player" className={styles.videoPlayer}>
                        {isPlaying ? (
                            <video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay loop muted className={styles.videoElement} />
                        ) : (
                            <div className={styles.playButton} onClick={togglePlay}>
                                <div className={styles.playIcon}>▶</div>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>

            <AnimatePresence>
                {isFloating && isPlaying && (
                    <motion.div
                        layoutId="video-player"
                        className={styles.floating}
                        drag
                        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                        dragElastic={0.2}
                    >
                        <video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay loop muted className={styles.videoElement} />
                        <button onClick={() => setIsPlaying(false)} className={styles.closeButton}>✕</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

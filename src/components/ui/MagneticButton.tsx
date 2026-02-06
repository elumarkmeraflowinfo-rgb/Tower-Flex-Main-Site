'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useSoundEffects } from '@/hooks/useSoundEffects';

export default function MagneticButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { playHover } = useSoundEffects();
    const hasPlayedRef = useRef(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        const distance = { x: clientX - center.x, y: clientY - center.y };

        // Play sound once on entry/engagement
        if (!hasPlayedRef.current) {
            playHover();
            hasPlayedRef.current = true;
        }

        // Spring physics: pull towards cursor but clamp
        setPosition({ x: distance.x * 0.2, y: distance.y * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
        hasPlayedRef.current = false;
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`inline-block ${className}`}
            // Since we don't have global utility classes easily for "inline-block", we keep it or use style
            style={{ display: 'inline-block' }}
        >
            {children}
        </motion.div>
    );
}

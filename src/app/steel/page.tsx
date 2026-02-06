'use client';

import SmartQuote from '@/components/features/SmartQuote';
import TextReveal from '@/components/ui/TextReveal';
import { motion } from 'framer-motion';

export default function SteelPage() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-[#18181B] relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-primary)] z-50 shadow-[0_0_20px_var(--color-primary)]" />
            <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-6xl w-full">
                <header className="mb-20">
                    <TextReveal
                        text="STEEL_WORKS"
                        className="text-[clamp(4rem,12vw,10rem)] font-black text-[var(--color-primary)] leading-none"
                    />
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="font-mono text-xs tracking-[0.4em] mt-4 opacity-40"
                    >
                /// AUTONOMOUS FABRICATION HUB // FACILITY_01
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="space-y-12"
                    >
                        <div className="flex gap-6">
                            <div className="w-px h-full bg-[var(--color-primary)] opacity-30" />
                            <div className="space-y-6">
                                <p className="text-xl font-light leading-relaxed opacity-60">
                                    Our heavy industrial facility operates 24/7, utilizing synchronized robotics and AI-driven quality gates.
                                </p>
                                <ul className="space-y-4 font-mono text-xs tracking-tighter uppercase">
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[var(--color-primary)]" />
                                        50,000 Tons Annual Capacity
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[var(--color-primary)]" />
                                        Precision Tolerance &lt; 0.01mm
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-[var(--color-primary)]" />
                                        ISO 9001:2026 CERTIFIED
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Decorative Tech Scan Line */}
                        <div className="relative h-24 overflow-hidden border border-white/5 bg-white/2">
                            <motion.div
                                animate={{ y: [0, 96, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-full h-px bg-[var(--color-primary)] opacity-40 shadow-[0_0_10px_var(--color-primary)]"
                            />
                            <div className="absolute inset-0 flex items-center justify-center font-mono text-[8px] opacity-20 tracking-[0.5em]">
                                TELEMETRY_SCANNING_SYSTEM_ACTIVE
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <div className="relative">
                            {/* Glowing effect under the component */}
                            <div className="absolute -inset-4 bg-[var(--color-primary)] opacity-5 blur-3xl pointer-events-none" />
                            <SmartQuote />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

'use client';

import BlueprintViewer from '@/components/features/BlueprintViewer';
import ProjectPulse from '@/components/features/ProjectPulse';
import TextReveal from '@/components/ui/TextReveal';
import { motion } from 'framer-motion';

export default function ConstructionPage() {
    return (
        <div className="w-full min-h-screen bg-zinc-900 relative flex overflow-hidden">
            {/* 3D Blueprint Background */}
            <div className="absolute inset-0 z-0">
                <BlueprintViewer />
            </div>

            {/* Glassmorphic Sidebar (Right) */}
            <motion.aside
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="relative z-20 w-[450px] min-h-screen ml-auto bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)] border-l border-[var(--glass-border)] p-12 flex flex-col justify-between"
            >
                <div>
                    <div className="mb-12">
                        <TextReveal text="TOWER_ALPHA" className="text-6xl font-black tracking-tighter text-[var(--color-primary)]" />
                        <p className="font-mono text-xs opacity-40 mt-2 tracking-[0.3em]">/// SECTOR_7G_CONSTRUCTION</p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-2">Specifications</h3>
                            <div className="p-4 bg-white/5 border border-white/5 space-y-2">
                                <div className="flex justify-between text-xs transition-colors hover:text-[var(--color-primary)]">
                                    <span className="opacity-60">Status</span>
                                    <span className="font-bold">ACTIVE_PHASE</span>
                                </div>
                                <div className="flex justify-between text-xs transition-colors hover:text-[var(--color-primary)]">
                                    <span className="opacity-60">Architect</span>
                                    <span className="font-bold">ANTIGRAVITY_v22</span>
                                </div>
                                <div className="flex justify-between text-xs transition-colors hover:text-[var(--color-primary)]">
                                    <span className="opacity-60">Structural</span>
                                    <span className="font-bold">HIGH_TENSILE_STEEL</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-2">Live Telemetry</h3>
                            <ProjectPulse />
                        </div>
                    </div>
                </div>

                <div className="opacity-20 font-mono text-[10px] flex justify-between">
                    <span>SCANNING_OS... 98%</span>
                    <span>© 2026 TOWERFLEX</span>
                </div>
            </motion.aside>

            {/* Bottom Floating Nav Info */}
            <div className="fixed bottom-8 left-8 z-30 pointer-events-none">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex items-center gap-4 text-xs font-mono text-[var(--color-primary)]"
                >
                    <span className="px-2 py-1 border border-current">SCROLL_TO_BUILD</span>
                    <span className="opacity-50">/// 0.0 - 100.0%</span>
                </motion.div>
            </div>
        </div>
    );
}

import PiPVideo from '@/components/features/PiPVideo';

// We can assume global styles handle font, or reuse module if needed.
// Let's stick to inline style or basic utility for the editorial layout.
// Or create a Listone.module.css? We can reuse the same module pattern if we want.
// For expediency, I'll use standard classes (Tailwind logic without Tailwind - inline styles or global)
// Wait, I said NO Tailwind.
// So I should validly use CSS Modules or inline styles.
// I'll create a simple CSS Module for this page to keep it clean.

import styles from './page.module.css';

export default function ListonePage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <span className={styles.kicker}>The Report</span>
                <h1 className={styles.title}>Future Living</h1>
                <p className={styles.meta}>By Architecture Weekly • Feb 2026</p>
            </header>

            <PiPVideo />

            <article className={styles.article}>
                <p className={styles.dropcap}>
                    In an era defined by rapid urbanization, the concept of "home" is undergoing a radical transformation.
                    We are no longer building static structures, but living ecosystems that breathe, adapt, and evolve with their inhabitants.
                </p>
                <p>
                    The Towerflex initiative represents the pinnacle of this philosophy. By merging high-tensile steel with
                    adaptive software centers, we create vertical villages that are effectively "liquid."
                </p>
                <p>
                    Imagine a wall that moves when you need more space. A window that adjusts its opacity based on your
                    circadian rhythm. This isn't science fiction; it's the standard operating procedure for Sector 7G.
                </p>
                {/* More text to enable scrolling */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </article>
        </div>
    );
}

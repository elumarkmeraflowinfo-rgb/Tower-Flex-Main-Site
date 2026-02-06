'use client';

import { useSoundEffects } from '@/hooks/useSoundEffects';

export default function SoundToggle() {
    const { isMuted, toggleMute } = useSoundEffects();

    // Basic styling inline for speed/simplicity or utility class if we had them, 
    // but we agreed on Vanilla/Modules. 
    // I'll stick to a simple clean button style without module just to keep this small component self-contained for now 
    // or use `style={{}}`. Ideally module, but for one button... 
    // Let's use a small style block or Tailwind if allowed? No Tailwind requested.
    // I'll use inline styles for the absolute critical positioning.

    return (
        <button
            onClick={toggleMute}
            style={{
                position: 'fixed',
                bottom: '1.5rem',
                left: '1.5rem',
                zIndex: 50,
                padding: '0.75rem',
                borderRadius: '50%',
                backgroundColor: '#18181B', // Zinc-900
                border: '1px solid #27272A',
                color: 'white',
                cursor: 'pointer',
                width: '3rem',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s'
            }}
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#27272A')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#18181B')}
        >
            {isMuted ? (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9l2 2m0 0l2-2m-2 2l-2 2m2-2l2 2" />
                </svg>
            ) : (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
            )}
        </button>
    );
}

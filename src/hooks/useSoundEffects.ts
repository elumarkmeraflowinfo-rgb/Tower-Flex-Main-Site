import useSound from 'use-sound';
import { useState, useEffect } from 'react';

// Using a free sound URL for demo purposes. In production, these should be local assets.
const CLICK_SOUND = 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3';
const HOVER_SOUND = 'https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3';

export const useSoundEffects = () => {
    const [isMuted, setIsMuted] = useState(false); // Default false for now, hydration safe check needed

    // Safe hydration check for localStorage
    useEffect(() => {
        const saved = localStorage.getItem('towerflex_mute');
        if (saved) setIsMuted(saved === 'true');
    }, []);

    const [playClick] = useSound(CLICK_SOUND, { volume: 0.5, soundEnabled: !isMuted });
    const [playHover] = useSound(HOVER_SOUND, { volume: 0.1, soundEnabled: !isMuted });

    const toggleMute = () => {
        const newState = !isMuted;
        setIsMuted(newState);
        localStorage.setItem('towerflex_mute', String(newState));
    };

    useEffect(() => {
        const handleStorage = () => setIsMuted(localStorage.getItem('towerflex_mute') === 'true');
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    return { playClick, playHover, isMuted, toggleMute };
};

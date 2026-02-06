'use client';

import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'gateway' | 'towerflex' | 'listone' | 'containers' | 'steel';

interface ThemeConfig {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    text: string;
    font: string;
    radius: string;
    mesh: [string, string]; // Two colors for the mesh gradient
}

const THEMES: Record<Theme, ThemeConfig> = {
    gateway: {
        primary: '#FF4D00',
        secondary: '#2962FF',
        accent: '#10B981',
        bg: '#f8fafc',
        text: '#0f172a',
        font: "'Outfit', sans-serif",
        radius: '0px',
        mesh: ['#FF4D00', '#2962FF']
    },
    towerflex: {
        primary: '#FF4D00',
        secondary: '#18181B',
        accent: '#FF4D00',
        bg: '#18181B',
        text: '#FAFAFA',
        font: "'Outfit', sans-serif",
        radius: '0px',
        mesh: ['#FF4D00', '#18181B']
    },
    listone: {
        primary: '#2962FF',
        secondary: '#FAFAFA',
        accent: '#2962FF',
        bg: '#FAFAFA',
        text: '#0f172a',
        font: "'Playfair Display', serif",
        radius: '24px',
        mesh: ['#2962FF', '#FFFFFF']
    },
    containers: {
        primary: '#10B981',
        secondary: '#18181B',
        accent: '#10B981',
        bg: '#064E3B',
        text: '#FAFAFA',
        font: "'Inter', sans-serif",
        radius: '1.5rem',
        mesh: ['#10B981', '#064E3B']
    },
    steel: {
        primary: '#FACC15',
        secondary: '#18181B',
        accent: '#FACC15',
        bg: '#18181B',
        text: '#FACC15',
        font: "'JetBrains Mono', monospace",
        radius: '0px',
        mesh: ['#FACC15', '#18181B']
    }
};

interface BrandContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('gateway');

    useEffect(() => {
        const config = THEMES[theme];
        const root = document.documentElement;

        root.style.setProperty('--color-primary', config.primary);
        root.style.setProperty('--color-secondary', config.secondary);
        root.style.setProperty('--color-accent', config.accent);
        root.style.setProperty('--bg-color', config.bg);
        root.style.setProperty('--text-color', config.text);
        root.style.setProperty('--font-primary', config.font);
        root.style.setProperty('--radius-primary', config.radius);

        // Update mesh gradient
        root.style.setProperty('--mesh-c1', config.mesh[0]);
        root.style.setProperty('--mesh-c2', config.mesh[1]);

        // Update glass colors based on theme bg
        if (config.bg === '#18181B' || config.bg === '#064E3B') {
            root.style.setProperty('--glass-bg', 'rgba(0, 0, 0, 0.4)');
            root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
        } else {
            root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.4)');
            root.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.05)');
        }
    }, [theme]);

    return (
        <BrandContext.Provider value={{ theme, setTheme }}>
            {children}
        </BrandContext.Provider>
    );
};

export const useBrand = () => {
    const context = useContext(BrandContext);
    if (!context) throw new Error("useBrand must be used within a BrandProvider");
    return context;
};

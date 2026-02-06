'use client';

import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'gateway' | 'towerflex' | 'listone' | 'containers' | 'steel';

interface ThemeConfig {
    primary: string;
    accent: string;
    font: string;
    radius: string;
    vars: Record<string, string>;
}

const THEMES: Record<Theme, ThemeConfig> = {
    gateway: {
        primary: '#FAFAFA',
        accent: '#18181B',
        font: "'Space Grotesk', sans-serif",
        radius: '0px',
        vars: { '--color-primary': '#FAFAFA', '--color-accent': '#18181B' }
    },
    towerflex: {
        primary: '#FF4D00',
        accent: '#18181B',
        font: "'Space Grotesk', sans-serif",
        radius: '0px',
        vars: { '--color-primary': '#FF4D00', '--color-accent': '#18181B' }
    },
    listone: {
        primary: '#2962FF',
        accent: '#FAFAFA',
        font: "'Playfair Display', serif",
        radius: '24px',
        vars: { '--color-primary': '#2962FF', '--color-accent': '#FAFAFA' }
    },
    containers: {
        primary: '#10B981',
        accent: '#18181B',
        font: "'Inter', sans-serif",
        radius: '1.5rem',
        vars: { '--color-primary': '#10B981', '--color-accent': '#18181B' }
    },
    steel: {
        primary: '#FACC15',
        accent: '#18181B',
        font: "'JetBrains Mono', monospace",
        radius: '0px',
        vars: { '--color-primary': '#FACC15', '--color-accent': '#18181B' }
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

        root.style.setProperty('--color-primary', config.vars['--color-primary']);
        root.style.setProperty('--color-accent', config.vars['--color-accent']);
        root.style.setProperty('--font-primary', config.font);
        root.style.setProperty('--radius-primary', config.radius);
    }, [theme]);

    // Optionally listen to pathname changes here if we want automatic switching
    // similar to the previous ThemeController, OR we do it in a separate Client Component.
    // We'll expose setTheme and let the pages/layout trigger it.

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

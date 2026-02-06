import type { Metadata } from 'next';
import { ReactLenis } from 'lenis/react';
import { BrandProvider } from '@/context/BrandContext';
import GlobalHeader from '@/components/layout/GlobalHeader';
import SoundToggle from '@/components/layout/SoundToggle';
import ThemeController from '@/components/layout/ThemeController';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'TowerFlex Ecosystem',
  description: 'High-Fidelity Industrial OS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Lenis is a Client Component wrapper */}
        <BrandProvider>
          <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
            <GlobalHeader />
            <SoundToggle />
            <ThemeController />
            <main className="w-full relative min-h-screen">
              {children}
            </main>
          </ReactLenis>
        </BrandProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { ReactLenis } from 'lenis/react';
import { BrandProvider } from '@/context/BrandContext';
import GlobalHeader from '@/components/layout/GlobalHeader';
import SoundToggle from '@/components/layout/SoundToggle';
import ThemeController from '@/components/layout/ThemeController';
import PageTransition from '@/components/layout/PageTransition';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'TowerFlex Ecosystem | Advanced Architectural OS',
  description: 'High-Fidelity Industrial OS for the Future of Urban Living.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BrandProvider>
          {/* Cinematic Mesh Background */}
          <div className="mesh-bg">
            <div className="mesh-circle-1" />
            <div className="mesh-circle-2" />
          </div>

          <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            <GlobalHeader />
            <SoundToggle />
            <ThemeController />
            <main className="w-full relative min-h-screen">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          </ReactLenis>
        </BrandProvider>
      </body>
    </html>
  );
}

import SmartQuote from '@/components/features/SmartQuote';

export default function SteelPage() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-zinc-900 border-t-8 border-yellow-400"
            style={{ backgroundColor: '#18181B', borderTopWidth: '8px', borderTopColor: '#FACC15' }}>
            {/* Inline style backup if generic classes fail */}

            <div style={{ maxWidth: '64rem', width: '100%' }}>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 700,
                    letterSpacing: '-0.05em',
                    fontFamily: 'monospace',
                    color: '#FACC15',
                    marginBottom: '3rem'
                }}>
                    STEELWORKS
                </h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div style={{ color: '#A1A1AA', fontFamily: 'monospace' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            PRECISION MANUFACTURING<br />
                            HEAVY INDUSTRIAL FABRICATION<br />
                            ISO 9001 CERTIFIED
                        </p>
                        <p>
                            Our facility operates 24/7 using autonomous welding robotics and AI-driven quality control.
                        </p>
                    </div>

                    <div style={{ width: '100%' }}>
                        <SmartQuote />
                    </div>
                </div>
            </div>
        </div>
    );
}

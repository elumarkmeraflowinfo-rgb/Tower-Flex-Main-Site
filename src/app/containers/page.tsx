export default function ContainersPage() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#10B981', /* Green */
            color: '#064E3B'
        }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>CONTAINER LOGISTICS</h1>
                <p style={{ marginTop: '1rem', opacity: 0.8 }}>Shipping Manifest: [PENDING]</p>
                <div style={{
                    marginTop: '2rem',
                    padding: '2rem',
                    border: '2px dashed currentColor',
                    borderRadius: '1.5rem'
                }}>
                    Inventory: 0 Units
                </div>
            </div>
        </div>
    );
}

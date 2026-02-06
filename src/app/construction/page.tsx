import BlueprintViewer from '@/components/features/BlueprintViewer';
import ProjectPulse from '@/components/features/ProjectPulse';

export default function ConstructionPage() {
    return (
        <div className="w-full min-h-screen bg-zinc-900 relative">
            <BlueprintViewer />

            {/* Telemetry Overlay - Fixed to bottom right */}
            <div className="fixed bottom-8 left-8 z-40 w-full max-w-sm pointer-events-none">
                <div className="pointer-events-auto">
                    <ProjectPulse />
                </div>
            </div>
        </div>
    );
}

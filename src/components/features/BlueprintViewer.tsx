'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

// Floor Component
function Floor({ index, visibleCount }: { index: number; visibleCount: number }) {
    const isVisible = index < visibleCount;
    const group = useRef<THREE.Group>(null);

    return (
        <group ref={group} position={[0, index * 1.8, 0]} visible={isVisible}>
            <mesh>
                <boxGeometry args={[8, 1.5, 8]} />
                <meshBasicMaterial color="var(--color-primary)" wireframe transparent opacity={0.3} />
            </mesh>
            <mesh>
                <boxGeometry args={[2, 1.5, 2]} />
                <meshBasicMaterial color="#18181B" transparent opacity={0.6} />
            </mesh>
        </group>
    );
}

function ConstructionScene() {
    const scroll = useScroll();
    const group = useRef<THREE.Group>(null);
    const [visibleFloors, setVisibleFloors] = useState(0);

    useFrame((_, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.1;
        }

        // Map scroll offset (0 to 1)
        const targetFloors = Math.floor(scroll.offset * 25);
        if (targetFloors !== visibleFloors) {
            setVisibleFloors(targetFloors);
        }
    });

    return (
        <group ref={group} position={[0, -10, 0]}>
            {[...Array(20)].map((_, i) => (
                <Floor key={i} index={i} visibleCount={visibleFloors} />
            ))}
        </group>
    );
}

export default function BlueprintViewer() {
    return (
        <div className="w-full h-[100vh] relative bg-zinc-900 overflow-hidden">
            <Canvas camera={{ position: [15, 20, 15], fov: 35 }}>
                <color attach="background" args={['#18181B']} />
                <gridHelper args={[40, 40, 0x333333, 0x111111]} />

                <ScrollControls pages={3} damping={0.2}>
                    <ConstructionScene />
                </ScrollControls>

                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    );
}

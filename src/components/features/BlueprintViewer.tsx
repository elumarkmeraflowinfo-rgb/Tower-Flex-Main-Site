'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll, Html } from '@react-three/drei';
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
                <meshBasicMaterial color="#FF4D00" wireframe transparent opacity={0.5} />
            </mesh>
            <mesh>
                <boxGeometry args={[2, 1.5, 2]} />
                <meshBasicMaterial color="#18181B" transparent opacity={0.8} />
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
        setVisibleFloors(targetFloors);
    });

    return (
        <>
            <group ref={group} position={[0, -10, 0]}>
                {[...Array(20)].map((_, i) => (
                    <Floor key={i} index={i} visibleCount={visibleFloors} />
                ))}
            </group>

            {/* Overlay HTML inside Canvas context if needed, or outside. 
            Drei Html makes it sticky to 3D position, but fullscreen overlay 
            is better outside often. Here we stick to the plan from Vite. */}
            <Html fullscreen className="pointer-events-none" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
                <div className="absolute top-0 left-0 p-8 w-full h-full flex flex-col justify-between z-10 text-orange-600 font-mono">
                    <div>
                        <h1 className="text-6xl font-bold tracking-tighter mix-blend-difference">TOWER_ALPHA</h1>
                        <p className="opacity-50 tracking-widest text-sm mt-2">/// STATUS: CONSTRUCTION_PHASE</p>
                    </div>
                    <div className="flex justify-between items-end opacity-75 text-xs">
                        <span>ELEVATION: {(visibleFloors * 3.5).toFixed(1)}m</span>
                        <span>SECTOR 7G // [SCROLL TO BUILD]</span>
                    </div>
                </div>
            </Html>
        </>
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

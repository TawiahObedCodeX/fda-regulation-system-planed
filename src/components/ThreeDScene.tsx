"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function FloatingPill({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position} castShadow>
        <cylinderGeometry args={[0.8, 0.8, 2.5, 32]} />
        <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function ThreeDScene() {
  return (
    <div className="w-full h-[600px] relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <FloatingPill position={[-3, 1, 0]} />
        <FloatingPill position={[3, -1, -2]} />
        <FloatingPill position={[0, 2, 1]} />

        <mesh rotation={[-Math.PI * 0.5, 0, 0]} position={[0, -4, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>

        <OrbitControls enablePan={false} enableZoom={true} minDistance={5} maxDistance={12} />
        <Environment preset="city" />
      </Canvas>

      {/* Overlay text for interactivity hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur">
        Drag to rotate • Scroll to explore
      </div>
    </div>
  );
}
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const CinemaScene: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <>
      {/* Abstract cinematic background elements */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} position={[0, 0, -5]} scale={2}>
          <torusKnotGeometry args={[2, 0.5, 100, 16]} />
          <MeshDistortMaterial color="#1a1a1a" emissive="#d4af37" emissiveIntensity={0.2} roughness={0.2} distort={0.4} />
        </mesh>
      </Float>
      
      {/* Cinematic particles/dust */}
      <points position={[0, 0, -2]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(300).map(() => (Math.random() - 0.5) * 20), 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#d4af37" transparent opacity={0.6} sizeAttenuation />
      </points>
    </>
  );
};

export default CinemaScene;

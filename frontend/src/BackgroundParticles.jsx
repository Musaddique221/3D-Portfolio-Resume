import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function BackgroundParticles() {
  const particlesRef = useRef()

  const particleCount = 500

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00ffff"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  )
}

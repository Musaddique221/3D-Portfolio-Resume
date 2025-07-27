import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function DownloadButton() {
  const meshRef = useRef()

  useFrame(() => {
    meshRef.current.rotation.y += 0.01
  })

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.png'
    link.download = 'Resume.png'
    link.click()
  }

  return (
    <mesh
      ref={meshRef}
      position={[2.2, -1.2, 0]}
      onClick={handleDownload}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'default')}
    >
      <boxGeometry args={[1.5, 0.5, 0.2]} />
      <meshStandardMaterial color={'#00FFFF'} />
      <Html position={[0, 0, 0.15]}>
        <div className="text-white font-semibold text-sm">Download Resume</div>
      </Html>
    </mesh>
  )
}

import { Html } from '@react-three/drei'

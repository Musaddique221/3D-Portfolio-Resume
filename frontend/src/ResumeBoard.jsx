import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export default function ResumeBoard() {
  const texture = useLoader(TextureLoader, '/resume.png')

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[2, 2.8]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

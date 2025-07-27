import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export default function AvatarImage() {
  const avatarTexture = useLoader(TextureLoader, '/avatar.jpeg')

  return (
    <mesh position={[-2.2, 0.5, 0]}>
      <circleGeometry args={[0.6, 64]} />
      <meshBasicMaterial map={avatarTexture} />
    </mesh>
  )
}

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import ResumeBoard from './ResumeBoard'
import AvatarImage from './AvatarImage'
import DownloadButton from './DownloadButton'
import BackgroundParticles from './BackgroundParticles'

export default function App() {
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <BackgroundParticles /> {/* ← Behind everything */}
          <ResumeBoard />
          <AvatarImage />
          <DownloadButton />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}

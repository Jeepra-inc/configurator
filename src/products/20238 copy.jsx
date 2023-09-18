import '../style.css'
import { useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Configurator from '../Configurator'
import { CustomizationProvider } from '../contexts/Customization'
import { OrbitControls } from '@react-three/drei'
import QuickControls from '../QuickControl'
import { Stage, SoftShadows } from '@react-three/drei'
import { Frame } from '../Frame'
import { Plane } from '@react-three/drei'

export default function Presentation() {    

  const canvasRef = useRef(null)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  const toggleClose = () => {
    setIsClosed(!isClosed)
    setIsFullScreen(false)
  }

  const captureSnapshot = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const snapshotUrl = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.href = snapshotUrl
      downloadLink.download = 'snapshot.png'
      downloadLink.click()
    }
  }

  const controls = useRef() 

  const resetCamera = () => {
    const { current } = controls
    if (current) {
      current.reset()
    }
  }

  return (
    <>
     <CustomizationProvider>
      <div className={`builder ${isFullScreen ? 'fullscreen' : ''} ${isClosed ? 'closed' : ''}`}>
        <div className='builderModule'>
          <Canvas
            eventPrefix='client'
            camera={{ position: [2, 0, 3], fov: 50 }}
            gl={{ preserveDrawingBuffer: true }}
            ref={canvasRef}
          >
            <color attach='background' args={['#f3f3f6']} />
            <OrbitControls 
                ref={controls}
                enableZoom={true} 
                enablePan={false}  
                makeDefault 
                minPolarAngle={Math.PI / 4} 
                maxPolarAngle={Math.PI / 2.01}
                minDistance={9} 
                maxDistance={9}
                />
      {/* <ambientLight intensity={0.3} />
      <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow /> */}
      <Stage 
        makeDefault 
        environment={'city'} 
        intensity={1}
        preset={'soft'}
        shadows ={'StageShadows'}
        args={[100, 100]}
      
      >
        <Plane  rotation={[-Math.PI / 2, 0, 0]} receiveShadow color={'#fff'} position={[0, -1, 0]}>

        </Plane>
        <Frame position={[0, 1, 0]} scale = {2}/>
        <SoftShadows
          contactShadows={true}
          width={2048}
          height={2048}
          far={10}
          near={0.1}
          resolution={1024}
          bias={-0.0001}
        />
      </Stage>
      </Canvas>
        </div>
        <Configurator />
        <QuickControls 
            captureSnapshot = {captureSnapshot}
            toggleFullScreen = {toggleFullScreen}
            resetCamera = {resetCamera}
            toggleClose = {toggleClose}
            isClosed = {isClosed}
          />
      </div>
    </CustomizationProvider>
    </>
  )
}

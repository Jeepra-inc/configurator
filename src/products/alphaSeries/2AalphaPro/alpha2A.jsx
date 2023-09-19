import { Frame } from './Frame'
import * as THREE from 'three'
import { useState, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Configurator from './Configurator'
import { CustomizationProvider } from '../../../contexts/Customization'
import { Line, OrbitControls } from '@react-three/drei'
import QuickControls from '../../../components/global/QuickControl'
import { Stage, SoftShadows, Text, Html, useProgress } from '@react-three/drei'
import Preview from './Preview'
export default function Presentation() { 
    
  const canvasRef = useRef(null)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  function Loader() {
    const { progress } = useProgress()
    return <Html center className='preloader'>
      <span className='loaderWrap'>
        <span className='loaderBar' style={{ width: `${progress}%` }}></span>
      </span>
    </Html>
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
    const { current } = controls;
    if (current) {
      const initialPosition = [0, 0, 0.5]; // Replace this with your initial camera position
      const animationDuration = 1000; // Duration of the animation in milliseconds
      const startTime = Date.now();
      const initialScale = 1.0;
      const initialCameraPosition = current.object.position.clone();
  
      const animate = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
  
        if (elapsedTime < animationDuration) {
          const t = elapsedTime / animationDuration;
          current.object.position.lerpVectors(
            initialCameraPosition,
            new THREE.Vector3(...initialPosition),
            t
          );
          requestAnimationFrame(animate);
        } else {
          // Ensure the camera is at the exact initial position when the animation ends
          current.object.position.set(...initialPosition);
        }
  
        current.update();
      };
  
      animate();
    }
  };


const [isLineVisible, setIsLineVisible] = useState(false);
const toggleLineVisibility = () => {
  setIsLineVisible(!isLineVisible);
};
return (     
<CustomizationProvider>
  <Preview />
    <div className={`builder ${isFullScreen ? 'fullscreen' : ''} ${isClosed ? 'closed' : ''}`}>
        <div className='builderModule'>
            <Canvas eventPrefix='client' camera={{ position: [-3, -3, 5], fov: 50 }} gl={{ preserveDrawingBuffer: true }} ref={canvasRef} >
            <Suspense fallback={<Loader />}>
            
                <color attach="background" args={['#f3f3f6']} />
                <Stage intensity={0.3}  shadows={{ type: 'contact', color: '#f3f3f6', colorBlend: 1, opacity: 0.5 }} adjustCamera={1} >
                    <Frame position={[0, 0, 0]}  scale={0.15} receiveShadows={false}/>
                </Stage>
                {isLineVisible && (
                <group visible={true} position={[-0.17, -0.3, 0.05]} scale={0.14}>
                    <Line
                        points={[[0, 0, 0], [2.2, 0, 0]]}
                        color="#5c5c5c"
                        lineWidth={1}
                        castShadow={false}
                      />
                      <Line
                        points={[[0, 0, 0], [0, 2.17, 0]]}
                        color="#5c5c5c"
                        lineWidth={1}
                        castShadow={false}
                      />
                      <Line
                        points={[[0, 0, -0.6], [0, 0, 0]]}
                        color="#5c5c5c"
                        lineWidth={1}
                        castShadow={false}
                      />  
                    <Text
                      scale={[0.1, 0.1, 0.1]}
                      color="#5c5c5c" 
                      position={[1.2, 0.05, 0]}
                    >
                    23"
                    </Text>
                    <Text
                      scale={[0.1, 0.1, 0.1]}
                      color="#5c5c5c" 
                      position={[-0.2, 1.1, 0]}
                    >
                    23"
                    </Text>
                    <Text
                      scale={[0.1, 0.1, 0.1]}
                      color="#5c5c5c" 
                      position={[-0.2, 0.2, -0.15]}
                      rotation={[0, -1.5, 0]}
                    >
                    2"
                    </Text>

                </group>
                )}

                <OrbitControls ref={controls} enableZoom={true} enablePan={false}  makeDefault minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2.01} minDistance={1} maxDistance={1} />
                <SoftShadows contactShadows={true} width={2048} height={2048} far={10} near={0.1} resolution={1024} bias={-0.0001} />
                </Suspense>
            </Canvas>
        </div>
        <Configurator />
        <QuickControls 
            captureSnapshot = {captureSnapshot}
            toggleFullScreen = {toggleFullScreen}
            resetCamera = {resetCamera}
            toggleClose = {toggleClose}
            isClosed = {isClosed}
            lineVisibility = {toggleLineVisibility}
        />

        
    </div>
</CustomizationProvider>
)}

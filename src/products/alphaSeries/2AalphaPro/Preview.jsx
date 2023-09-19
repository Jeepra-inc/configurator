import { Canvas } from '@react-three/fiber'
import { useState, useRef, Suspense } from 'react'
import { Stage, SoftShadows, Text, Html, useProgress } from '@react-three/drei'
import { Frame } from "./Frame"
import { useCustomization } from '../../../contexts/Customization'

const Preview = () =>
{  
    const {shapeMapSelector, standardFabricMapSelector,gilfordFabricMapSelector, finishMapSelector, pattern, standMapSelector, hangerMapSelector, backMapSelector} = useCustomization()
    let narrowSubstract = 0

      if (shapeMapSelector === 'narrow' && shapeMapSelector === 'rectangle')  {
        narrowSubstract = 0.20;
      } else {
        narrowSubstract = 0
      }

    let rectangl = 0
      if (shapeMapSelector === 'rectangle' && shapeMapSelector !== 'narrow')  {
        rectangl = 0.10;
      } else {
        rectangl = 0
      }

        return (
            <div className='preview'>

            <Canvas 
            className='neCanvas' 
            camera={{ position: [0, 0, 1], fov: 50 }} 
            gl={{ preserveDrawingBuffer: true }}
            pixelRatio={window.devicePixelRatio} 
            setSize={{ width: window.innerWidth, height: window.innerHeight }}
  >

              <Stage intensity={0.3} shadows={{ type: 'contact', color: '#f3f3f6', colorBlend: 1, opacity: 0.5 }} adjustCamera={false}>
                {shapeMapSelector === 'narrow' &&( 
                    <group>
                        <group position={[-0.22, 0 , 0]}>
                            <Frame position={[1.5, 0, -10]} scale={0.1} receiveShadows={false} />
                        </group>                
                        <group position={[-0.075, 0, 0]}>
                            <Frame position={[0, 2, 0]} scale={0.1} receiveShadows={false} />
                        </group>                
                        <group position={[0.075, 0, 0]}>
                            <Frame position={[1.5, 0, 0]} scale={0.1} receiveShadows={false} />
                        </group>
                        <group position={[0.22, 0 , 0]}>
                            <Frame position={[1.5, 0, -10]} scale={0.1} receiveShadows={false} />
                        </group>  
                    </group>
                )}
                {shapeMapSelector === 'rectangle' &&(
                <group>
                    <group position={[-0.12, 0 , 0]}>
                        <Frame position={[1.5, 0, -10]} scale={0.1} receiveShadows={false} />
                    </group>                
                    <group position={[0.12, 0, 0]}>
                        <Frame position={[0, 2, 0]} scale={0.1} receiveShadows={false} />
                    </group>  
                </group>
                )}
                {shapeMapSelector !== 'rectangle' && shapeMapSelector !== 'narrow' && (
                <group position={[0, -0.1, 0]}>
                    <group position={[-0.22, 0.22 , 0]}>
                        <Frame position={[1.5, 0, -10]} scale={0.1} receiveShadows={false} />
                    </group>                
                    <group position={[0, 0.22, 0]}>
                        <Frame position={[0, 2, 0]} scale={0.1} receiveShadows={false} />
                    </group>                
                    <group position={[0.22, 0.22, 0]}>
                        <Frame position={[1.5, 0, 0]} scale={0.1} receiveShadows={false} />
                    </group>
                    <group position={[-0.22, 0 , 0]}>
                        <Frame position={[1.5, 0, -10]} scale={0.1} receiveShadows={false} />
                    </group>                
                    <group position={[0, 0, 0]}>
                        <Frame position={[0, 2, 0]} scale={0.1} receiveShadows={false} />
                    </group>                
                    <group position={[0.22, 0, 0]}>
                        <Frame position={[1.5, 0, 0]} scale={0.1} receiveShadows={false} />
                    </group>
                </group>
                )}
                
              </Stage>
              <SoftShadows contactShadows={true} width={2048} height={2048} far={10} near={0.1} resolution={1024} bias={-0.0001} />
          </Canvas>
          <div className='roomBase'><img src="https://www.gikacoustics.com/wp-content/uploads/2023/09/dreamstime_xxl_198336351.webp" /></div>
</div>
        )
}

export default Preview
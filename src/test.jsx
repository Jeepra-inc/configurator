import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls } from '@react-three/drei'

export default function Test() {
  return (
    <Canvas shadows gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [4, -1, 8], fov: 35 }}>
      <color attach="background" args={['skyblue']} />
      <Stage
        intensity={0.5}
        preset="rembrandt"
        shadows={{ type: 'contact', color: 'skyblue', colorBlend: 2, opacity: 1 }}
        adjustCamera={1}
        environment="city">
        {/* <Gltf castShadow receiveShadow src="https://57iefg.csb.app/Perseverance-transformed.glb" /> */}
        <mesh castShadow receiveShadow>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
      </Stage>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.9} makeDefault />
    </Canvas>
  )
}

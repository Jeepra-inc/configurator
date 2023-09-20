import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Frame } from "./Frame";
import { useCustomization } from "../../../contexts/Customization";
import { RepeatWrapping, TextureLoader } from "three";
import Lights from "../../../components/global/Lights";

const Preview = ({ preview }) => {
  const textureLoader = new TextureLoader(); 
  const texture = textureLoader.load("./textures/extra/preview-bg.webp");
  texture.repeat.set(1, 1);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping; 

  const {
    shapeMapSelector,
  } = useCustomization();
  let narrowSubstract = 0;

  if (shapeMapSelector === "narrow" && shapeMapSelector === "rectangle") {
    narrowSubstract = 0.2;
  } else {
    narrowSubstract = 0;
  }

  let rectangl = 0;
  if (shapeMapSelector === "rectangle" && shapeMapSelector !== "narrow") {
    rectangl = 0.1;
  } else {
    rectangl = 0;
  }

  return (
    <div className="prevWrap">
      <div className="preview">
        <span className="closePreview" onClick={preview}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#0F0F0F"
              d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
            />
          </svg>
        </span>

        <Canvas  className="neCanvas"
    camera={{ position: [0, 0, 1], fov: 50 }}
    gl={{ preserveDrawingBuffer: true }}
    pixelRatio={window.devicePixelRatio}
    resize={false} 
    shadows
    >
            
            <Lights />
          <group scale={4.6} position={[0, 18.15, -5.45]} castShadow>
            {shapeMapSelector === "narrow" && (
              <group castShadow>
                <group position={[-0.22, -0.09, 0]}>
                  <Frame
                    position={[1.5, 0, -10]}
                    scale={0.1}
                    receiveShadows={false}
                  />
                </group>
                <group position={[-0.075, -0.09, 0]}>
                  <Frame
                    position={[0, 2, 0]}
                    scale={0.1}
                    receiveShadows={false}
                  />
                </group>
                <group position={[0.075, -0.09, 0]}>
                  <Frame
                    position={[1.5, 0, 0]}
                    scale={0.1}
                    receiveShadows={false}
                  />
                </group>
                <group position={[0.22, -0.09, 0]}>
                  <Frame
                    position={[1.5, 0, -10]}
                    scale={0.1}
                    receiveShadows={false}
                  />
                </group>
              </group>
            )}
            {shapeMapSelector === "rectangle" && (
              <group>
                <group position={[-0.12, -0.09, 0]}>
                  <Frame
                    position={[1.5, 0, -10]}
                    scale={0.1}
                    receiveShadows={false}
                  />
                </group>
                <group position={[0.12, -0.09, 0]}>
                  <Frame
                    position={[0, 2, 0]}
                    scale={0.1}
                    receiveShadows={false}
                  />
                </group>
              </group>
            )}
            {shapeMapSelector !== "rectangle" &&
              shapeMapSelector !== "narrow" && (
                <group position={[0, -0.1, 0]}>
                  <group position={[-0.22, 0.22, 0]}>
                    <Frame
                      position={[1.5, 0, -10]}
                      scale={0.1}
                      receiveShadows={false}
                    />
                  </group>
                  <group position={[0, 0.22, 0]}>
                    <Frame
                      position={[0, 2, 0]}
                      scale={0.1}
                      receiveShadows={false}
                    />
                  </group>
                  <group position={[0.22, 0.22, 0]}>
                    <Frame
                      position={[1.5, 0, 0]}
                      scale={0.1}
                      receiveShadows={false}
                    />
                  </group>
                  <group position={[-0.22, 0, 0]}>
                    <Frame
                      position={[1.5, 0, -10]}
                      scale={0.1}
                      receiveShadows={false}
                    />
                  </group>
                  <group position={[0, 0, 0]}>
                    <Frame
                      position={[0, 2, 0]}
                      scale={0.1}
                      receiveShadows={false}
                    />
                  </group>
                  <group position={[0.22, 0, 0]}>
                    <Frame
                      position={[1.5, 0, 0]}
                      scale={0.1}
                      receiveShadows={false}
                    />
                  </group>
                </group>
              )}
          </group>

      <mesh position={[0, -1.1, -5.5]} scale={[0.7, 0.5, 0.5]} receiveShadow>
        <planeGeometry args={[8, 8]}  />
        <meshStandardMaterial map={texture} />
    </mesh>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default Preview;

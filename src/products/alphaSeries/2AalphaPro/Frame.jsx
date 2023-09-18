import * as THREE from 'three';
import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useCustomization } from "../../../contexts/Customization";
import { loadTextures } from '../../../components/global/Textures';



export function Frame(props) {


  const propss = useTexture({
    map: './textures/extra/metal-back/Metal_scratched_009_basecolor.webp',
    normalMap: './textures/extra/metal-back/Metal_scratched_009_normal.webp',
    roughnessMap: './textures/extra/metal-back/Metal_scratched_009_roughness.webp',
    aoMap: './textures/extra/metal-back/Metal_scratched_009_ambientOcclusion.webp',
  })

  propss.map.repeat.set(1, 1);
  propss.normalMap.repeat.set(1, 1);
  propss.roughnessMap.repeat.set(1, 1);
  propss.aoMap.repeat.set(1, 1);

  propss.map.wrapS = propss.map.wrapsT = THREE.RepeatWrapping;
  propss.normalMap.wrapS = propss.normalMap.wrapsT = THREE.RepeatWrapping;
  propss.roughnessMap.wrapS = propss.aoMap.wrapsT = THREE.RepeatWrapping;
  propss.aoMap.wrapS = propss.aoMap.wrapsT = THREE.RepeatWrapping;

  // const gilFord = useTexture({
  //   map: '/textures/fabrics/Gilford/gilford.jpeg',
  //   // onLoad: () => {
  //   //   console.log('loaded texture');
  //   //  }
  // })

  // gilFord.map.repeat.set(15, 15);

  // gilFord.map.wrapS = gilFord.map.wrapT = THREE.RepeatWrapping;





  const {shapeMapSelector, standardFabricMapSelector,gilfordFabricMapSelector, finishMapSelector, pattern, standMapSelector, hangerMapSelector, backMapSelector} = useCustomization()

  const { nodes } = useGLTF("./models/alphaSeries1.glb");

  const { nordicGray, beachBlonde, wallnut, white, black, gilFord } = loadTextures();

  const FabricColor = standardFabricMapSelector.name ? standardFabricMapSelector.name : gilfordFabricMapSelector.name

  function getMaterial(material) {
    switch (material) {
      case 'nordicgray':
        return nordicGray;
      case 'beachblonde':
        return beachBlonde;
      case 'wallnut':
        return wallnut;
      case 'white':
        return white;
      case 'black':
        return black;
      default:
        return beachBlonde;
    }
  }
  if (gilfordFabricMapSelector.name) {
    console.log(gilfordFabricMapSelector.name);
  } else {
    console.log('No Value');
  }
  let materialToUse;

if (gilfordFabricMapSelector.name) {
  materialToUse = new THREE.MeshStandardMaterial({
    ...finishMapSelector,
    color: FabricColor,
    ...gilFord,
  });
} else {
  materialToUse = new THREE.MeshStandardMaterial({
    ...finishMapSelector,
    color: FabricColor, 
  });
}

  return (
    <group {...props} dispose={null} position={[0, -4, 0]}>

      {/* Panel Box */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.squareCuber.geometry}
        material={materialToUse}
        visible= {shapeMapSelector === 'square'}
        position={
          standMapSelector.name === "metal" 
          ? [0, 0.1, -0.005] 
          : standMapSelector.name === "wood"
          ? [0, 1.35, -0.005]
          : [0, 0, -0.005]
        }
        scale={[1, 1, 0.087]}
      >
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rectangleCube.geometry}
        material={nodes.rectangleCube.material}
        visible= {shapeMapSelector === 'rectangle'}
        position={
          standMapSelector.name === "metal" 
          ? [0, 1.08, -0.05] 
          : standMapSelector.name === "wood"
          ? [0, 2.35, 0.01]
          : [0, 1, -0.05]}
        scale={[1, 1.98, 0.087]}
      ><meshStandardMaterial {...finishMapSelector} color={FabricColor} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.narrowCube.geometry}
        material={nodes.narrowCube.material}
        position={
          standMapSelector.name === "metal" 
          ? [0, 1.08, 0.01] 
          : standMapSelector.name === "wood"
          ? [0, 2.35, 0.165]
          : [0, 1, 0.01]}
        visible= {shapeMapSelector === 'narrow'}
        scale={[0.5, 1.98, 0.087]}
      ><meshStandardMaterial {...finishMapSelector} color={FabricColor} />
      </mesh>


      {/* Panel Box Back */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.squareCuberBack.geometry}
        material={nodes.squareCuberBack.material}
        visible= {shapeMapSelector === 'square' && backMapSelector === "None"}
        position={
          standMapSelector.name === "metal" 
          ? [0, 0.1, -0.006] 
          : standMapSelector.name === "wood"
          ? [0, 1.35, -0.006]
          : [0, 0, -0.01]}
        scale={[0.8, 0.8, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rectangleCubeBack.geometry}
        material={nodes.rectangleCubeBack.material}
        visible= {shapeMapSelector === 'rectangle' && backMapSelector === "None"}
        position={
          standMapSelector.name === "metal" 
          ? [0, 1.08, -0.115] 
          : standMapSelector.name === "wood"
          ? [0, 2.35, -0.05]
          : [0, 1, -0.115]}
        scale={[0.8, 1.78, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.narrowCubeBack.geometry}
        material={nodes.narrowCubeBack.material}
        position={
          standMapSelector.name === "metal" 
          ? [0, 1.08, -0.08] 
          : standMapSelector.name === "wood"
          ? [0, 2.35, 0.085]
          : [0, 1, -0.08]}
        visible= {shapeMapSelector === 'narrow' && backMapSelector === "None" }
        scale={[0.3, 1.78, 0.01]}
      />
      
      

      {/* Panel Frames */}
      {/* Panel Square Frame */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.squareFrame.geometry}
        material={nodes.squareFrame.material}
        visible= {shapeMapSelector === 'square' && pattern === '1d-square'}
        position={
          standMapSelector.name === "metal" 
          ? [0, 0.1, 0.1] 
          : standMapSelector.name === "wood"
          ? [0, 1.35, 0.1]
          : [0, 0, 0.096]}
        scale={[1, 1, 0.0087]}
        ><meshStandardMaterial {...getMaterial(finishMapSelector)} /></mesh>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.squareFrame2Db.geometry}
        material={nodes.squareFrame2Db.material}
        visible= {shapeMapSelector === 'square' && pattern === '2da-square'}
        position={
          standMapSelector.name === "metal" 
          ? [0, 0.1, 0.1] 
          : standMapSelector.name === "wood"
          ? [0, 1.35, 0.1]
          : [0, 0, 0.096]}
        scale={[1, 1, 0.0087]}
        ><meshStandardMaterial {...getMaterial(finishMapSelector)} /></mesh>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.squareFrame2Da.geometry}
        material={nodes.squareFrame2Da.material}
        visible= {shapeMapSelector === 'square' && pattern === '2db-square'}
        position={
          standMapSelector.name === "metal" 
          ? [0, 0.1, 0.1] 
          : standMapSelector.name === "wood"
          ? [0, 1.35, 0.1]
          : [0, 0, 0.096]}
        scale={[1, 1, 0.0087]}
        ><meshStandardMaterial {...getMaterial(finishMapSelector)} /></mesh>


      {/* Panel Rectangle Frame */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rectangleFrame.geometry}
        material={nodes.rectangleFrame.material}
        visible= {shapeMapSelector === 'rectangle' && pattern === '1d-rectangle'}
        position={
          standMapSelector.name === "metal" 
          ? [0, 1.08, 0.05] 
          : standMapSelector.name === "wood"
          ? [0, 2.35, 0.105]
          : [0, 1, 0.05]}
        scale={[1, 1.98, 0.0087]}
        ><meshStandardMaterial {...getMaterial(finishMapSelector)} /></mesh>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.rectangleFrame2Db.geometry}
        material={nodes.rectangleFrame2Db.material}
        visible= {shapeMapSelector === 'rectangle' && pattern === '2da-rectangle'}
        position={
          standMapSelector.name === "metal" 
          ? [0, 1.08, 0.05] 
          : standMapSelector.name === "wood"
          ? [0, 2.35, 0.105]
          : [0, 1, 0.05]}
        scale={[1, 1.98, 0.0087]}
        ><meshStandardMaterial {...getMaterial(finishMapSelector)} /></mesh>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.rectangleFrame2Da.geometry}
        material={nodes.rectangleFrame2Da.material}
        visible= {shapeMapSelector === 'rectangle'  && pattern === '2db-rectangle'}
        position={
          standMapSelector.name === "metal" 
          ? [0, 1.08, 0.05] 
          : standMapSelector.name === "wood"
          ? [0, 2.35, 0.105]
          : [0, 1, 0.05]}
        scale={[1, 1.98, 0.0087]}
        ><meshStandardMaterial {...getMaterial(finishMapSelector)} /></mesh>


      {/* Panel Narrow Frame */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.narrowFrame.geometry}
        material={nodes.narrowFrame.material}
        visible= {shapeMapSelector === 'narrow' && pattern === '1d-narrow'}
        position={
          standMapSelector.name === "metal" 
          ? [0, 1.08, 0.1] 
          : standMapSelector.name === "wood"
          ? [0, 2.35, 0.260]
          : [0, 1, 0.1]
        }
        scale={[0.5, 1.98, 0.0087]}
        ><meshStandardMaterial {...getMaterial(finishMapSelector)} /></mesh>      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.narrowFrame2Db.geometry}
        material={nodes.narrowFrame2Db.material}
        visible= {shapeMapSelector === 'narrow' && pattern === '2da-narrow'}
        position={
          standMapSelector.name === "metal" 
          ? [0, 1.08, 0.1] 
          : standMapSelector.name === "wood"
          ? [0, 2.35, 0.260]
          : [0, 1, 0.1]
        }
        scale={[0.5, 1.98, 0.0087]}
        ><meshStandardMaterial {...getMaterial(finishMapSelector)} /></mesh>     
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.narrowFrame2Da.geometry}
        material={nodes.narrowFrame2Da.material}
        visible= {shapeMapSelector === 'narrow'  && pattern === '2db-narrow'}
        position={
          standMapSelector.name === "metal" 
          ? [0, 1.08, 0.1] 
          : standMapSelector.name === "wood"
          ? [0, 2.35, 0.260]
          : [0, 1, 0.1]
        }
        scale={[0.5, 1.98, 0.0087]}
        ><meshStandardMaterial {...getMaterial(finishMapSelector)} /></mesh>
        

      {/* Panel Hanger */}
      <group
        position={
          shapeMapSelector === "rectangle" 
          ? [0.6, 2.92, -0.19] 
          : shapeMapSelector === "narrow"
          ? [0.3, 2.92, -0.12]
          : [0.6, 0.94, -0.15]
        }
        rotation={[Math.PI / 2, 3.15, 3.15]}
        scale={
          shapeMapSelector === "narrow" && standMapSelector.name !== "wood" && standMapSelector.name !== "metal"
            ? [0.055, 0.055, 0.055] 
            : standMapSelector.name === "wood" || standMapSelector.name === "metal"
            ?[0, 0, 0]
            : [0.07, 0.07, 0.07]          
          }
        visible = {hangerMapSelector === "yes" }
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sawtooth_hanger.geometry}
          material={nodes.sawtooth_hanger.material}
        ><meshStandardMaterial {...propss} /></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sawtooth_hanger_1.geometry}
          material={nodes.sawtooth_hanger_1.material}
          ><meshStandardMaterial {...propss} /></mesh>
      </group>
      <group
        position={
          shapeMapSelector === "rectangle" 
          ? [-0.6, 2.92, -0.19] 
          : shapeMapSelector === "narrow"
          ? [-0.3, 2.92, -0.12]
          : [-0.6, 0.94, -0.15]
        }
        rotation={[Math.PI / 2, 3.15, 3.15]}
        visible = {hangerMapSelector === "yes"}
        scale={
          shapeMapSelector === "narrow" && standMapSelector.name !== "wood"  && standMapSelector.name !== "metal"
            ? [0.055, 0.055, 0.055] 
            : standMapSelector.name === "wood" || standMapSelector.name === "metal"
            ?[0, 0, 0]
            : [0.07, 0.07, 0.07]          
          }
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sawtooth_hanger.geometry}
          material={nodes.sawtooth_hanger.material}
          ><meshStandardMaterial {...propss} /></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sawtooth_hanger_1.geometry}
          material={nodes.sawtooth_hanger_1.material}
          ><meshStandardMaterial {...propss} /></mesh>
      </group>



      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stand1.geometry}
        material={nodes.Stand1.material}
        position={shapeMapSelector === "narrow" ? [-0.32, -0.9, -0.03] : [-0.6, -0.95, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.05, 0.09, 0.05]}
        visible = {standMapSelector.name === "metal"}
        ><meshStandardMaterial color={"#4f4941"} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stand2.geometry}
        material={nodes.Stand2.material}
        position={shapeMapSelector === "narrow" ? [0.32, -0.9, -0.03] : [0.6, -0.95, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.05, 0.09, 0.05]}
        visible = {standMapSelector.name === "metal"}
      ><meshStandardMaterial color={"#4f4941"} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.feet1.geometry}
        material={nodes.feet1.material}
        position={shapeMapSelector === "narrow" ? [0.35, -0.9, 0.27] : [0.6, -0.9, 0.1]}
        scale={[0.3, 0.3, 0.6]}
        visible = {standMapSelector.name === "wood"}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      ><meshStandardMaterial {...beachBlonde} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.feet2.geometry}
        material={nodes.feet2.material}
        position={shapeMapSelector === "narrow" ? [-0.35, -0.9, 0.27] : [-0.6, -0.9, 0.1]}
        visible = {standMapSelector.name === "wood"}
        scale={[0.3, 0.3, 0.6]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      ><meshStandardMaterial {...beachBlonde} /></mesh>
      
  {/* visible={shouldRenderText} */}


  {/* <gridHelper args={[10, 10]} /> */}
</group>

  );

}

useGLTF.preload("./models/alphaSeries1.glb");
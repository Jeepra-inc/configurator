// texture.jsx
import * as THREE from 'three';
import { useTexture } from "@react-three/drei";

export const loadTextures = () => {

  const beachBlonde = useTexture({ map: './textures/frames/beachblonde/beach_blonde.webp' });
  beachBlonde.map.repeat.set(3, 3);
  beachBlonde.map.wrapS = beachBlonde.map.wrapsT = THREE.RepeatWrapping; 

  const nordicGray = useTexture({ map: './textures/frames/nordicGray/nordic_gray.webp' });
  nordicGray.map.repeat.set(3, 3);
  nordicGray.map.wrapS = nordicGray.map.wrapT = THREE.RepeatWrapping;

  const wallnut = useTexture({ map: './textures/frames/wallnutWood/walnut.webp' });
  wallnut.map.repeat.set(4, 4);
  wallnut.map.wrapS = wallnut.map.wrapsT = THREE.RepeatWrapping;

  const white = useTexture({ map: './textures/frames/whiteVeneer/white_wood.webp' });
  white.map.repeat.set(1, 1);
  white.map.wrapS = white.map.wrapsT = THREE.RepeatWrapping;

  const black = useTexture({ map: './textures/frames/blackVeneer/black_wood.webp' });
  black.map.repeat.set(1, 1);
  black.map.wrapS = black.map.wrapsT = THREE.RepeatWrapping;

  const gilFord = useTexture({
    map: './textures/fabrics/Gilford/gilford.jpeg'
  })
  gilFord.map.repeat.set(6, 6);
  gilFord.map.wrapS = gilFord.map.wrapT  = THREE.RepeatWrapping;
  gilFord.map.minFilter = THREE.NearestFilter; // or THREE.NearestFilter
gilFord.map.magFilter = THREE.NearestFilter; // or THREE.NearestFilter


  //Metal for hanger
  const hanger = useTexture({
    map: './textures/extra/metal-back/Metal_scratched_009_basecolor.webp',
    normalMap: './textures/extra/metal-back/Metal_scratched_009_normal.webp',
    roughnessMap: './textures/extra/metal-back/Metal_scratched_009_roughness.webp',
    aoMap: './textures/extra/metal-back/Metal_scratched_009_ambientOcclusion.webp',
  });

  hanger.map.repeat.set(3, 3);
  hanger.normalMap.repeat.set(3, 3);
  hanger.roughnessMap.repeat.set(3, 3);
  hanger.aoMap.repeat.set(3, 3);

  hanger.map.wrapS = hanger.map.wrapsT = THREE.RepeatWrapping;
  hanger.normalMap.wrapS = hanger.normalMap.wrapsT = THREE.RepeatWrapping;
  hanger.roughnessMap.wrapS = hanger.aoMap.wrapsT = THREE.RepeatWrapping;
  hanger.aoMap.wrapS = hanger.aoMap.wrapsT = THREE.RepeatWrapping;

  return { frames, beachBlonde, wallnut, white, black, nordicGray, gilFord, hanger };
};

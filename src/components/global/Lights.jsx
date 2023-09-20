// import { useControls } from "leva"

function Lights() {
    // const ambientCtl = useControls('Ambient Light', {
    //   visible: true,
    //   intensity: {
    //     value: 0.4,
    //     min: 0,
    //     max: 1.0,
    //     step: 0.1
    //   }
    // })
  
    // const directionalCtl = useControls('Directional Light', {
    //   visible: true,
    //   position: {
    //     x: -5,
    //     y: 5,
    //     z: 6
    //   },
    //   castShadow: true
    // })
  
    // const pointCtl = useControls('Point Light', {
    //   visible: false,
    //   position: {
    //     x: -2,
    //     y: 2,
    //     z: 0
    //   },
    //   intensity: {
    //     value: 0.25,
    //     min: 0,
    //     max: 1.0,
    //     step: 0.1
    //   },
    //   castShadow: true
    // })
  
    // const spotCtl = useControls('Spot Light', {
    //   visible: false,
    //   position: {
    //     x: 3,
    //     y: 2.5,
    //     z: 1
    //   },
    //   castShadow: true
    // })
    return (
      <>
        <ambientLight intensity={0.4} />
        <directionalLight
        //   visible={directionalCtl.visible}
          position={[-5, 5, 6]}
          castShadow
        />
        {/* <pointLight
          visible={pointCtl.visible}
          position={[pointCtl.position.x, pointCtl.position.y, pointCtl.position.z]}
          castShadow={pointCtl.castShadow}
          intensity={pointCtl.intensity}
        />
        <spotLight
          visible={spotCtl.visible}
          position={[spotCtl.position.x, spotCtl.position.y, spotCtl.position.z]}
          castShadow={spotCtl.castShadow}
        /> */}
      </>
    )
  }

  export default Lights 
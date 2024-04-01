import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, OrbitControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/bmw.glb");
  return <primitive object={scene} {...props} />;
}

function CarModel() {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} className="absolute">
      <color attach="background" args={["#fffff"]} />
      
      <Suspense fallback={null}>
        <PresentationControls
          speed={1.5}
          global
          zoom={1.5}
          polar={[-0.1, Math.PI/2]}
        >
          <Stage environment={null}>
            <Model scale={0.01} />
             <Model scale={0.01} />
            <OrbitControls enablePan={true}
                                  enableZoom={true}
                                  enableRotate={false}/>
           
          </Stage>
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
}

export default CarModel;
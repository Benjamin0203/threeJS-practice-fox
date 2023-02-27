import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

import Model from "./Model";
import Placeholder from "./Placeholder";
import Hamburger from "./Hamburger";
import Fox from "./Fox";
import Human from "./Human";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} />

      {/* <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh> */}
      {/* <Suspense fallback={<Placeholder />}>
        <Hamburger scale={0.35} />
      </Suspense> */}

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Fox />
      {/* <Human /> */}
    </>
  );
}

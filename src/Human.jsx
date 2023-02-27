import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Human() {
  const human = useGLTF("./human.gltf");
  return (
    <>
      <primitive object={human.scene} scale={0.35} />
    </>
  );
}

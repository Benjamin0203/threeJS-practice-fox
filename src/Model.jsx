import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//draco
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
//drei
import { useGLTF, Clone } from "@react-three/drei";

export default function Model() {
  const model = useGLTF("./hamburger.glb");
  return (
    <>
      <Clone object={model.scene} scale={0.35} position-x={-4} />
      <Clone object={model.scene} scale={0.35} position-x={0} />
      <Clone object={model.scene} scale={0.35} position-x={4} />
      <Clone object={model.scene} scale={0.35} position-x={8} />
    </>
  );
}

useGLTF.preload("./hamburger-draco.glb");

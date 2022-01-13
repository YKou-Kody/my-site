import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from "react";

const Voxel = () => {
    const gltf = useLoader(GLTFLoader, '../../Images/pc3d.gltf')

    return (
        <>
            <primitive position={[200, 200, 0]} object={gltf.scene} scale={1} />

        </>
    )
}

export default Voxel

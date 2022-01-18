import React from 'react'
import "./Intro.css"
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from "react";
import Voxel from './Voxel'
import Model from './Model'
import { Environment } from '@react-three/drei'
import { motion } from 'framer-motion'





const Intro = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <div className="flex h-screen pl-20 bg-gray-700">
                <div className="background overflow-clip scale-0" ></div>
                <div className="items-center justify-items-center" style={{ flex: 2 }}>
                    <div className="introWrapper justify-items-center items-center flex ">
                        <p className="relative flex justify-center items-center h-40 w-40 shadow-2xl
                    mx-auto bg-white rounded-full border-2 border-white overflow-hidden
                    shadow-black
                    ">
                            <img src={require("../../Images/picture.png")} ></img>
                        </p>
                        <h2 className="introTitle mt-3 text-white">
                            Hello, I am
                        </h2>

                        <h1 className="introName relative bottom-2 text-white">
                            Kody Kou
                        </h1>

                        <div className="introTitle">
                            <div className="introTitleWrapper ">
                                <div className="introTitleItem">Software Developer</div>
                                <div className="introTitleItem">Software Engineering Student</div>
                                <div className="introTitleItem">Team Player</div>
                                <div className="introTitleItem">Software Developer</div>
                                <div className="introTitleItem">Software Developer</div>
                            </div>
                        </div>
                        <div className="relative top-4 max-w-lg text-center text-white">
                            Hello! I'm Kody and I am a pursuing a Masters in
                        </div>

                    </div>


                </div>
                {/* <div className="flex" style={{ flex: 1 }}>
            </div> */}
                {/* <Canvas>
                    <Suspense>
                        <Voxel />
                    </Suspense>
                </Canvas> */}




                {/* <Canvas>
                <Suspense fallback={null}>
                    <Model />
                    <Environment present="sunset" background />
                </Suspense>

            </Canvas> */}

            </div>
        </motion.div>
    )
}

export default Intro

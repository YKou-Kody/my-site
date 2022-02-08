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
                            👋Hello, I am
                        </h2>

                        <h1 className="introName relative bottom-2 text-white">
                            Kody Kou
                        </h1>

                        <div className="introTitle">
                            <div className="introTitleWrapper ">
                                <div className="introTitleItem">Software Developer</div>
                                <div className="introTitleItem">Software Engineer</div>
                                <div className="introTitleItem">Web Developer</div>
                            </div>
                        </div>
                        <div className="relative top-4 max-w-lg text-left text-white">
                            Hello! I'm Kody and I am a pursuing a Master's degree in Software Engineering at the University of Calgary, I love all things tech!

                        </div>
                        <br></br>
                        <div className="relative top-4 max-w-lg text-left text-white">
                            I'm passionate about developing software and giving life to interesting ideas through the power of technology and programming.
                        </div>
                        <br></br>

                        <div className="relative ml-0 top-4 max-w-lg text-left text-white">
                            <p>Actively seeking software developer or software engineering opportunities starting May 2022.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <a className="introButton " href="http://www.linkedin.com/in/KodyKou" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
                            <p className="ml-2">LinkedIn
                            </p></a>

                        <a className="introButton" href="https://github.com/YKou-Kody" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            <p className="ml-2">Github</p></a>

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
        </motion.div >
    )
}

export default Intro

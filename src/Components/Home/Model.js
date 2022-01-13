import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/pc3d.gltf')
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI, 0, -Math.PI]}>
                <group position={[0, 31.89, 3.74]}>
                    <group position={[-4.81, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['Fan-Local'].geometry}
                            material={nodes['Fan-Local'].material}
                            position={[-5.49, 15.69, -7.44]}
                            rotation={[-Math.PI, 1.57, -Math.PI]}
                        />
                    </group>
                    <group position={[-13.55, -0.37, 21.04]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['FrontCaseFan1-Local'].geometry}
                            material={nodes['FrontCaseFan1-Local'].material}
                            position={[5, 10, -15.5]}
                        />
                    </group>
                    <group position={[-13.54, 5.31, 20.95]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['FrontCaseFan2-Local'].geometry}
                            material={nodes['FrontCaseFan2-Local'].material}
                            position={[5, 10, -15.5]}
                        />
                    </group>
                    <group position={[-11.01, -0.03, 2.56]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['BackFan-Local'].geometry}
                            material={nodes['BackFan-Local'].material}
                            position={[4.53, 17.5, -15.53]}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['SidePanel-Local'].geometry}
                        material={materials['SidePanel-Material']}
                        position={[-4.53, 13.02, -2.95]}
                    />
                    <group position={[19.5, -0.02, 5.97]}>
                        <group position={[0.99, 5, 4.31]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes['Screen-Local'].geometry}
                                material={materials['MonitorScreen-Material']}
                                position={[0.5, 6.5, -15.5]}
                            />
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['Monitor-Local'].geometry}
                            material={materials['Monitor-Material']}
                            position={[1.5, 9.5, -12]}
                        />
                    </group>
                    <group position={[0, 0, 7.39]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['MicStand-Local'].geometry}
                            material={materials['MicStand-Material']}
                            position={[34.04, 12.04, -6.52]}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['PC-Local'].geometry}
                        material={materials['PC-Material']}
                        position={[-8.36, 10, -3]}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Desk-Local'].geometry}
                    material={materials['Desk-Material']}
                    position={[22.5, 16, 2.5]}
                />
                <group position={[42.09, 0.01, 12.05]}>
                    <group position={[0, -0.01, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['Drawer1-Local'].geometry}
                            material={nodes['Drawer1-Local'].material}
                            position={[9.34, 20.03, -6.1]}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Drawers-Local'].geometry}
                        material={nodes['Drawers-Local'].material}
                        position={[9.5, 10.96, -6.5]}
                    />
                </group>
                <group position={[42.09, 0.01, 12.05]}>
                    <group position={[0, -0.01, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['Drawer1_(1)-Local'].geometry}
                            material={nodes['Drawer1_(1)-Local'].material}
                            position={[-48.46, 20.03, -6.1]}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Drawers2-Local'].geometry}
                        material={nodes['Drawers2-Local'].material}
                        position={[-48.44, 10.96, -6.5]}
                    />
                </group>
                <group position={[14.43, 32.01, 20.43]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Mouse-Local'].geometry}
                        material={materials['Mouse-Material']}
                        position={[-11, 5, -11]}
                    />
                </group>
                <group position={[28.22, 32.05, 21.29]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['Keyboard-Local'].geometry}
                        material={materials['Keyboard-Material']}
                        position={[6.5, 2, -10.08]}
                    />
                </group>
                <group position={[-22.93, -1.66, 17.89]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['MousePad-Local'].geometry}
                        material={materials['MousePad-Material']}
                        position={[37.46, 48.74, 0]}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/pc3d.gltf')

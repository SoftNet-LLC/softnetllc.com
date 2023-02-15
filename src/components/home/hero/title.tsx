import React, { useRef, useState } from "react";
import { Center, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HomeHeroTitle = () => {

    const meshRef: any = useRef();
    const textRef: any = useRef();


    return (
        <Center
            ref={meshRef}
            top
            bottom
            position={[0, 14, 15]}>
            <Text3D
                ref={textRef}
                size={7}
                letterSpacing={0}
                bevelEnabled={true}
                bevelThickness={0.1}
                bevelSize={0.1}
                height={0.05}
                font="/fonts/IBM Plex Mono_Bold.json">
                SoftNet.LLC
                <meshStandardMaterial
                    color="#900000" />
            </Text3D>
        </Center>
    );
};

export default HomeHeroTitle;

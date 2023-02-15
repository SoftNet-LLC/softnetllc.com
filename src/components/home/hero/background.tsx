import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const HomeHeroBackground = () => {
    const colorRef: any = useRef();
    console.log(colorRef)
    useFrame(({ clock }) => {
        // const tt = parseInt(String((clock.getElapsedTime()*10)%255))
        // console.log(tt)
        // colorRef.current.args = [`rgb(${tt}, 0, 0)`]
    })

    return (
        <color
            args={["black"]}
            ref={colorRef}
            attach="background"/>
    );
};

export default HomeHeroBackground;

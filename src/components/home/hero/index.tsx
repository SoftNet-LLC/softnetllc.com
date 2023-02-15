import React, { FC, Fragment, Suspense, useCallback, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import HomeHeroWrap from "./style/wrap";
import { TextureLoader } from "three";
import { ActionButton } from "@components/shared/button";
import { P1 } from "@components/shared/paragraph";
import { H1 } from "@components/shared/heading";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import Image from "next/image";
import { AUTH_BG, HOME_HERO } from "@assets/images";

const Points = () => {
    const imageTex = useLoader(TextureLoader, "/circle.png")
    const bufferRef: any = useRef();

    let t: number = 0;
    let f: number = 0.002;
    let a: number = 3;

    const graph = useCallback((x: number, z: number) => {
        return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    }, [t, f, a])

    const count = 100
    const sep = 5
    let positions: any = useMemo(() => {
        let position: any[] = [];

        for (let xi: number = 0; count > xi; xi++) {
            for (let zi: number = 0; count > zi; zi++) {
                let x: number = sep * (xi - count / 2);
                let z: number = sep * (zi - count / 2);
                let y: number = graph(x, z);
                position.push(x, y, z)
            }
        }

        return new Float32Array(position)
    }, [count, sep, graph])

    useFrame(() => {
        t += 15
        const positions = bufferRef.current.array;

        let i = 0;
        for (let xi = 0; count > xi; xi++) {
            for (let zi = 0; count > zi; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                positions[i+1] = graph(x, z);
                i += 3;
            }
        }

        bufferRef.current.needsUpdate = true;
    })


    return (
        <points>
            <bufferGeometry
                attach="geometry">
                <bufferAttribute
                    ref={bufferRef}
                    attach="attributes-position"
                    array={positions}
                    count={positions.length}
                    itemSize={3}/>
            </bufferGeometry>
            <pointsMaterial
                map={imageTex}
                color={0x00AAFF}
                size={0.4}
                sizeAttenuation={true}
                transparent={false}
                alphaTest={0.1}
                opacity={0.5}
                attach="material"/>
        </points>
    )
}


const AnimationCanvas = () => {
    return (
        <Fragment>
            <Suspense fallback={null}>
                <Points/>
                {/*<Controls/>*/}
            </Suspense>
        </Fragment>
    )
}

const HomeHero: FC = () => {
    return (
        <HomeHeroWrap id="home-hero">
            <Canvas camera={{ position: [0, 20, 100] }}>
                <AnimationCanvas/>
            </Canvas>
            <Image
                src={HOME_HERO}
                width={1920}
                height={1080}
                placeholder="blur"
                alt="Auth Image"/>
            <div className="overlay">
                <Container>
                    <Grid container>
                        <Grid
                            lg={7}
                            md={8}
                            sm={10}
                            xs={12}>
                            <Grid
                                container
                                spacing={2}>
                                <Grid
                                    xs={12}>
                                    <H1 color="light" id="home-hero-title">
                                        Start your project with the SoftNet.LLC
                                    </H1>
                                </Grid>
                                <Grid
                                    xs={12}>
                                    <P1
                                        color="light"
                                        id="home-hero-subtitle"
                                        style={{
                                            marginBottom: 32
                                        }}>
                                        Full-stack design, development & support
                                        with experience of over 500 delivering web
                                        and mobile apps.
                                    </P1>
                                </Grid>
                                <Grid
                                    xs={12}
                                    lg={5}>
                                    <ActionButton
                                        href="/conversation"
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        id="home-hero-btn1"
                                        fullWidth>
                                        Start Conversation
                                    </ActionButton>
                                </Grid>
                                <Grid
                                    xs={12}
                                    lg={5}>
                                    <ActionButton
                                        href="/services"
                                        variant="outlined"
                                        color="secondary"
                                        size="large"
                                        className="light"
                                        id="home-hero-btn2"
                                        fullWidth>
                                        Learn More Services
                                    </ActionButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </HomeHeroWrap>
    );
};


export default HomeHero;

import React, { FC, useEffect } from 'react';
import {
    Avatar,
    Card,
    CardContent,
    Container,
    IconButton,
    Rating,
    Stack,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Slider from 'react-slick';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { H2, H4 } from 'components/shared/heading';
import { P1, P2, P3 } from 'components/shared/paragraph';
import { ActionButton } from 'components/shared/button';
import { HomeTestMinalsWrap } from './styles';

interface Props {
    className?: string;
    style?: any;
    onClick?: () => void;
}

const PrevButton = (props: Props) => {
    useEffect(() => {
        animate();
    }, []);

    return (
        <IconButton
            color="secondary"
            className={props.className}
            style={props.style}
            onClick={props.onClick}
        >
            <ChevronLeft />
        </IconButton>
    );
};

const NextButton = (props: Props) => {
    return (
        <IconButton
            color="secondary"
            className={props.className}
            style={props.style}
            onClick={props.onClick}
        >
            <ChevronRight />
        </IconButton>
    );
};

const HomeTestMinals: FC = () => {
    useEffect(() => {
        animate();
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 2000,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />,
    };

    return (
        <HomeTestMinalsWrap id="home-testminal">
            <Container>
                <Stack spacing={5}>
                    <Stack spacing={1}>
                        <H2 color="light" id="home-testminal-title">
                            Our customers say!
                        </H2>
                        <P1 color="light" id="home-testminal-subtitle">
                            What they are say about our services?
                        </P1>
                    </Stack>

                    <div id='home-testminal-slider'>
                        <Slider {...settings}>
                            <div>
                                <Card
                                    style={{
                                        padding: 15,
                                        borderRadius: 0,
                                    }}
                                >
                                    <CardContent>
                                        <Stack spacing={3}>
                                            <P2>
                                                Galadrim is a dynamic, reactive and
                                                committed team. Throughout the
                                                project, they were able to adapt and
                                                allowed us to start the site while
                                                the modeling was not finished, in
                                                order to meet our deadlines. The
                                                custom development was a perfect
                                                answer to our problem of
                                                customizable and adjustable
                                                subscriptions. I recommend them
                                                without a doubt.
                                            </P2>
                                            <Stack
                                                direction="row"
                                                spacing={2}
                                                alignItems="center"
                                            >
                                                <Avatar
                                                    src="https://api.acadium.com/u/3e47w0bl5/100008526259"
                                                    alt="Elsiter"
                                                    variant="square"
                                                    sx={{
                                                        width: 68,
                                                        height: 68,
                                                    }}
                                                />
                                                <Stack>
                                                    <Rating
                                                        readOnly
                                                        size="small"
                                                        defaultValue={5}
                                                    />
                                                    <H4>Steven Aitkins</H4>
                                                    <P3>Locallolo Owner</P3>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </div>
                            <div>
                                <Card
                                    style={{
                                        padding: 15,
                                        borderRadius: 0,
                                    }}
                                >
                                    <CardContent>
                                        <Stack spacing={3}>
                                            <P2>
                                                Galadrim is a dynamic, reactive and
                                                committed team. Throughout the
                                                project, they were able to adapt and
                                                allowed us to start the site while
                                                the modeling was not finished, in
                                                order to meet our deadlines. The
                                                custom development was a perfect
                                                answer to our problem of
                                                customizable and adjustable
                                                subscriptions. I recommend them
                                                without a doubt.
                                            </P2>
                                            <Stack
                                                direction="row"
                                                spacing={2}
                                                alignItems="center"
                                            >
                                                <Avatar
                                                    src="https://api.acadium.com/u/3e47w0bl5/100008526259"
                                                    alt="Elsiter"
                                                    variant="square"
                                                    sx={{
                                                        width: 68,
                                                        height: 68,
                                                    }}
                                                />
                                                <Stack>
                                                    <Rating
                                                        readOnly
                                                        size="small"
                                                        defaultValue={5}
                                                    />
                                                    <H4>Steven Aitkins</H4>
                                                    <P3>Locallolo Owner</P3>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </div>
                            <div>
                                <Card
                                    style={{
                                        padding: 15,
                                        borderRadius: 0,
                                    }}
                                >
                                    <CardContent>
                                        <Stack spacing={3}>
                                            <P2>
                                                Galadrim is a dynamic, reactive and
                                                committed team. Throughout the
                                                project, they were able to adapt and
                                                allowed us to start the site while
                                                the modeling was not finished, in
                                                order to meet our deadlines. The
                                                custom development was a perfect
                                                answer to our problem of
                                                customizable and adjustable
                                                subscriptions. I recommend them
                                                without a doubt.
                                            </P2>
                                            <Stack
                                                direction="row"
                                                spacing={2}
                                                alignItems="center"
                                            >
                                                <Avatar
                                                    src="https://api.acadium.com/u/3e47w0bl5/100008526259"
                                                    alt="Elsiter"
                                                    variant="square"
                                                    sx={{
                                                        width: 68,
                                                        height: 68,
                                                    }}
                                                />
                                                <Stack>
                                                    <Rating
                                                        readOnly
                                                        size="small"
                                                        defaultValue={5}
                                                    />
                                                    <H4>Steven Aitkins</H4>
                                                    <P3>Locallolo Owner</P3>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </div>
                            <div>
                                <Card
                                    style={{
                                        padding: 15,
                                        borderRadius: 0,
                                    }}
                                >
                                    <CardContent>
                                        <Stack spacing={3}>
                                            <P2>
                                                Galadrim is a dynamic, reactive and
                                                committed team. Throughout the
                                                project, they were able to adapt and
                                                allowed us to start the site while
                                                the modeling was not finished, in
                                                customizable and adjustable
                                                subscriptions. I recommend them
                                                without a doubt.
                                            </P2>
                                            <Stack
                                                direction="row"
                                                spacing={2}
                                                alignItems="center"
                                            >
                                                <Avatar
                                                    src="https://api.acadium.com/u/3e47w0bl5/100008526259"
                                                    alt="Elsiter"
                                                    variant="square"
                                                    sx={{
                                                        width: 68,
                                                        height: 68,
                                                    }}
                                                />
                                                <Stack>
                                                    <Rating
                                                        readOnly
                                                        size="small"
                                                        defaultValue={5}
                                                    />
                                                    <H4>Steven Aitkins</H4>
                                                    <P3>Locallolo Owner</P3>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </div>
                        </Slider>
                    </div>

                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        direction="row"
                        spacing={2}
                    >
                        <ActionButton
                            variant="contained"
                            color="secondary"
                            id="home-testminal-btn1"
                        >
                            Read More Reviews
                        </ActionButton>

                        <ActionButton
                            id="home-testminal-btn2"
                            variant="outlined"
                            color="secondary"
                            className="light"
                        >
                            Write your review
                        </ActionButton>
                    </Stack>
                </Stack>
            </Container>
        </HomeTestMinalsWrap>
    );
};

const animate = () => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#home-testminal',
            start: 'top center',
        },
    });

    tl.fromTo(
        '#home-testminal',
        {
            width: '0',
        },
        {
            width: '100%',
            duration: 1.1
        }
    )

    tl.fromTo(
        '#home-testminal-title',
        {
            opacity: 0,
            x: -50,
        },
        {
            opacity: 1,
            x: 0,
        }
    ).fromTo(
        '#home-testminal-subtitle',
        {
            opacity: 0,
            x: 20,
        },
        {
            opacity: 1,
            x: 0,
        }
    );

    tl.fromTo(
        '#home-testminal-slider',
        {
            opacity: 0,
            scale: 0,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 1.1
        }
    );

    tl.fromTo(
        '#home-testminal-btn1',
        {
            opacity: 0,
            scale: 0,
        },
        {
            opacity: 1,
            scale: 1,
        }
    );

    tl.fromTo(
        '#home-testminal-btn2',
        {
            opacity: 0,
            scale: 0,
        },
        {
            opacity: 1,
            scale: 1,
        }
    );
};

export default HomeTestMinals;

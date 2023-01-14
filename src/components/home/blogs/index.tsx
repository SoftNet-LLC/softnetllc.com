import React, { FC, useEffect } from 'react';
import {
    Button,
    ButtonBase,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Stack,
} from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { H4 } from 'components/shared/heading';
import { P2 } from 'components/shared/paragraph';
import { ActionButton } from 'components/shared/button';
import { HomeBlogsWrap } from './styles';

const HomeBlogs: FC = () => {
    useEffect(() => {
        animate();
    }, []);
    
    return (
        <HomeBlogsWrap id='home-blog'>
            <Container>
                <Stack spacing={6}>
                    <Grid container spacing={3}>
                        <Grid item lg={4} xs={12}>
                            <Card id='home-blog-item1'>
                                <ButtonBase
                                    sx={{ display: 'block', width: '100%' }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/images/project3.png"
                                        alt="green iguana"
                                    />
                                </ButtonBase>
                                <CardContent>
                                    <Stack spacing={1}>
                                        <H4>
                                            Réduire les lenteurs TypeScript de
                                            i18n
                                        </H4>
                                        <P2>
                                            Cet article fait suite à un autre,
                                            il est conseillé de le lire avant :
                                            pourquoi-mon-projet-typescript-est-lent.Dans
                                            le dernier ...
                                        </P2>
                                    </Stack>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item lg={4} xs={12}>
                            <Card id='home-blog-item2'>
                                <ButtonBase
                                    sx={{ display: 'block', width: '100%' }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/images/project3.png"
                                        alt="green iguana"
                                    />
                                </ButtonBase>
                                <CardContent>
                                    <Stack spacing={1}>
                                        <H4>
                                            Réduire les lenteurs TypeScript de
                                            i18n
                                        </H4>
                                        <P2>
                                            Cet article fait suite à un autre,
                                            il est conseillé de le lire avant :
                                            pourquoi-mon-projet-typescript-est-lent.Dans
                                            le dernier ...
                                        </P2>
                                    </Stack>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item lg={4} xs={12}>
                            <Card id='home-blog-item3'>
                                <ButtonBase
                                    sx={{ display: 'block', width: '100%' }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image="/images/project3.png"
                                        alt="green iguana"
                                    />
                                </ButtonBase>
                                <CardContent>
                                    <Stack spacing={1}>
                                        <H4>
                                            Réduire les lenteurs TypeScript de
                                            i18n
                                        </H4>
                                        <P2>
                                            Cet article fait suite à un autre,
                                            il est conseillé de le lire avant :
                                            pourquoi-mon-projet-typescript-est-lent.Dans
                                            le dernier ...
                                        </P2>
                                    </Stack>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    <Stack justifyContent="center" alignItems="center">
                        <ActionButton variant="contained" color="secondary" id='home-blog-button'>
                            Read More blogs
                        </ActionButton>
                    </Stack>
                </Stack>
            </Container>
        </HomeBlogsWrap>
    );
};

const animate = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: '#home-blog',
            start: 'top center',
        },
    })
        .fromTo(
            '#home-blog-item1',
            {
                opacity: 0,
                y: -100,
                x: -100,
                scale: 1.5
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
            }
        )
    
    gsap.timeline({
        scrollTrigger: {
            trigger: '#home-blog',
            start: 'top center',
        },
    })
        .fromTo(
            '#home-blog-item2',
            {
                opacity: 0,
                y: 100,
                x: -100,
                scale: 1.5
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
            }
        )
    
    gsap.timeline({
        scrollTrigger: {
            trigger: '#home-blog',
            start: 'top center',
        },
    })
        .fromTo(
            '#home-blog-item3',
            {
                opacity: 0,
                y: 100,
                x: 100,
                scale: 1.5
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1
            }
        )
        .fromTo(
            '#home-blog-button',
            {
                opacity: 0,
                scale: 0,
            },
            {
                opacity: 1,
                scale: 1,
            }
        )

       
};


export default HomeBlogs;

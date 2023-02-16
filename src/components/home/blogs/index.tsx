import React, { FC, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
    Container,
    Stack,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"
import { ActionButton } from "@components/shared/button";
import HomeBlogsWrap from "./style/wrap";
import BlogCard from "@components/shared/card/blog";


const HomeBlogs: FC = () => {
    useEffect(() => {
        animate();
    }, []);

    return (
        <HomeBlogsWrap id='home-blog'>
            <Container>
                <Grid
                    justifyContent="center"
                    container
                    spacing={3}>
                    <Grid>
                        <BlogCard/>
                    </Grid>
                    <Grid>
                        <BlogCard/>
                    </Grid>
                    <Grid>
                        <BlogCard/>
                    </Grid>
                    <Grid>
                        <BlogCard/>
                    </Grid>
                    <Grid
                        style={{ display: "flex", justifyContent: "center", marginTop: 24 }}
                        xs={12}>
                        <ActionButton
                            variant="contained"
                            color="secondary"
                            id='home-blog-button'>
                            Read More
                        </ActionButton>
                    </Grid>
                </Grid>
            </Container>
        </HomeBlogsWrap>
    );
};

const animate = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: "#home-blog",
            start: "top center",
        },
    })
        .fromTo(
            ".home-blog-item",
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
            }
        )
        .fromTo(
            "#home-blog-button",
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

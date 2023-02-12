import { Container, Pagination } from "@mui/material";
import React, { FC } from "react";
import BlogsListWrap from "./style/wrap";
import BlogCard from "@components/shared/card/blog";
import Grid from "@mui/material/Unstable_Grid2";

const BlogsList: FC = () => {
    return (
        <BlogsListWrap>
            <Container>
                <Grid
                    justifyContent="center"
                    spacing={3}
                    container>
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
                    <Grid>
                        <Pagination
                            count={10}
                            variant="outlined"
                            shape="rounded" />
                    </Grid>
                </Grid>
            </Container>
        </BlogsListWrap>
    );
};

export default BlogsList;

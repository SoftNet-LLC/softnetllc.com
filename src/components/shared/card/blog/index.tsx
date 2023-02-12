import React, { FC } from "react";
import { BlogType } from "@utils/types/blog";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { H3, H4 } from "@components/shared/heading";
import styled from "@emotion/styled";
import { P3 } from "@components/shared/paragraph";

const BlogCard: FC<BlogType> = () => {
    return (
        <BlogCardWrap
            className="home-blog-item">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/temp/project1.png"
                    alt="green iguana"/>
            </CardActionArea>
            <CardContent>
                <p className="post-date">
                    3th Nov, 2023
                </p>
                <H3 style={{ fontSize: 20, marginBottom: 8 }}>We are okay for start up!</H3>
                <P3>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </P3>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </BlogCardWrap>
    );
};

const BlogCardWrap = styled(Card)`
  max-width: 340px;
  border-radius: 0;
  
  p {
    margin-bottom: 0;
    font-size: 12px;
    line-height: 1.7;
  }
  
  .post-date {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    color: #aaaaaa;
  }
  
  .MuiCardActionArea-root{
    width: calc(100% + 2px);
    .MuiCardMedia-root{
      width: calc(100% + 2px);
    }
  }
  
 
`

export default BlogCard;

import React from "react";
import { NextPage } from "next";
import LandingLayout from "@layouts/landing";
import BlogsHero from "@components/blogs/hero";
import BlogsList from "@components/blogs/list";

const BlogsPage: NextPage = () => {
    return (
        <LandingLayout>
            <BlogsHero/>
            <BlogsList/>
        </LandingLayout>
    );
};

export default BlogsPage;

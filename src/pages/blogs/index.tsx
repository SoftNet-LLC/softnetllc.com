import React from "react";
import { NextPage } from "next";
import LandingLayout from "@layouts/landing";
import BlogsHero from "@components/blogs/hero";
import BlogsList from "@components/blogs/list";
import { SeoProps } from "@utils/types/layout.type";

const pageSeo: SeoProps = {
    title: "Blogs - SoftNet.LLC",
    description: "Web & Mobile app development services in United State.",
    image: {
        url: "/softnetllc.jpg",
        width: 1000,
        height: 510
    },
    keywords: [
        "SoftNet",
        "LLC",
        "Web Development",
        "Website Development",
        "Mobile App Development",
        "Developers in US",
        "Agency in US",
        "United State Software",
        "Web Design",
        "App Development",
        "US web services"
    ],
    url: "https://softnetllc.com/blogs"
}


const BlogsPage: NextPage = () => {
    return (
        <LandingLayout seo={pageSeo}>
            <BlogsHero/>
            <BlogsList/>
        </LandingLayout>
    );
};

export default BlogsPage;

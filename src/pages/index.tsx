import React from "react";
import { NextPage } from "next";
import LandingLayout from "@layouts/landing";
import { SeoProps } from "@utils/types/layout.type";
import dynamic from "next/dynamic";
import HomeHero from "@components/home/hero";
const HomePartners = dynamic(() => import("@components/home/partners"), { ssr: false });
const HomeAbout = dynamic(() => import("@components/home/about"), { ssr: false });
const HomeExpertise = dynamic(() => import("@components/home/expertise"), { ssr: false });
const HomeProjects = dynamic(() => import("@components/home/projects"), { ssr: false });
const HomeChallenge = dynamic(() => import("@components/home/challenge"), { ssr: false });
const HomeBlogs = dynamic(() => import("@components/home/blogs"), { ssr: false });
const HomeAction = dynamic(() => import("@components/home/action"), { ssr: false });

const pageSeo: SeoProps = {
    title: "Home - SoftNet.LLC",
    description: "Web & Mobile app development services in United State.",
    image: {
        url: "/softnetllc.png",
        width: 1448,
        height: 853
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
    url: "https://softnetllc.com"
}

const HomePage: NextPage = () => {
    return (
        <LandingLayout seo={pageSeo}>
            <HomeHero/>
            <HomePartners/>
            <HomeAbout/>
            <HomeExpertise/>
            <HomeProjects/>
            <HomeChallenge/>
            <HomeBlogs/>
            <HomeAction/>
        </LandingLayout>
    );
};

export default HomePage;

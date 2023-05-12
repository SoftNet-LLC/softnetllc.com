import React from "react";
import { NextPage } from "next";
import LandingLayout from "@layouts/landing";
import { SeoProps } from "@utils/types/layout.type";
import HomeHero from "@components/home/hero";
import HomeGallery from "@components/home/gallery";
import HomeChallenge from "@components/home/challenge";

const pageSeo: SeoProps = {
    title: "Web & Mobile App Development Services | SoftNet.LLC",
    description: "SoftNet.LLC is a leading provider of custom web and mobile app development services worldwide. We specialize in creating innovative software solutions tailored to your specific needs, using cutting-edge technologies to deliver exceptional user experiences that drive business results. Contact us today to learn more about how we can help you achieve your goals with custom software development.",
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
            <HomeGallery/>
            <HomeChallenge/>
        </LandingLayout>
    );
};

export default HomePage;

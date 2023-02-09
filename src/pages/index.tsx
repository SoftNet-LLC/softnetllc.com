import React from "react";
import { NextPage } from "next";
import LandingLayout from "@layouts/landing";
import { SeoProps } from "@utils/types/layout.type";
import HomeHero from "@components/home/hero";
import HomePartners from "@components/home/partners";

const pageSeo: SeoProps = {
    title: "Home - SoftNet.LLC",
    description: "Web & Mobile app development service in United State.",
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
        "US web service"
    ],
    url: "https://softnetllc.com"
}

const HomePage: NextPage = () => {
    return (
        <LandingLayout seo={pageSeo}>
            <HomeHero/>
            <HomePartners/>
        </LandingLayout>
    );
};

export default HomePage;

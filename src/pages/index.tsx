import React from "react";
import { NextPage } from "next";
import LandingLayout from "@layouts/landing";
import { SeoProps } from "@utils/types/layout.type";
import HomeHero from "@components/home/hero";

const pageSeo: SeoProps = {
    title: "SoftNet.LLC - Home",
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
        "US web service"
    ],
    url: "https://softnetllc.com"
}

const HomePage: NextPage = () => {
    return (
        <LandingLayout seo={pageSeo}>
            <HomeHero/>
        </LandingLayout>
    );
};

export default HomePage;

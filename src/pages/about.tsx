import React from "react";
import LandingLayout from "@layouts/landing";
import { SeoProps } from "@utils/types/layout.type";
import { NextPage } from "next";
import AboutHero from "@components/about/hero";
import AboutTeam from "@components/about/team";

const pageSeo: SeoProps = {
    title: "About - SoftNet.LLC",
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
    url: "https://softnetllc.com/about"
}

const AboutPage: NextPage = () => {
    return (
        <LandingLayout seo={pageSeo}>
            <AboutHero/>
            <AboutTeam/>
        </LandingLayout>
    );
};

export default AboutPage;

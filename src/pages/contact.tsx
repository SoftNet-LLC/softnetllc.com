import React from "react";
import { NextPage } from "next";
import LandingLayout from "@layouts/landing";
import dynamic from "next/dynamic";
const ContactHero = dynamic(() => import("@components/contact/hero"), { ssr: false });
import ContactForm from "@components/contact/form";
import { SeoProps } from "@utils/types/layout.type";


const pageSeo: SeoProps = {
    title: "Contact Us - SoftNet.LLC",
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
    url: "https://softnetllc.com/contact"
}

const ContactPage: NextPage = () => {
    return (
        <LandingLayout seo={pageSeo}>
            <ContactHero/>
            <ContactForm/>
        </LandingLayout>
    );
};

export default ContactPage;

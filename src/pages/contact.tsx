import React from "react";
import { NextPage } from "next";
import LandingLayout from "@layouts/landing";
import dynamic from "next/dynamic";
const ContactHero = dynamic(() => import("@components/contact/hero"), { ssr: false });
import ContactForm from "@components/contact/form";

const ContactPage: NextPage = () => {
    return (
        <LandingLayout>
            <ContactHero/>
            <ContactForm/>
        </LandingLayout>
    );
};

export default ContactPage;

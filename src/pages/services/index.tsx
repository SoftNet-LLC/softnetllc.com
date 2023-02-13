import React, { FC } from "react";
import { SeoProps } from "@utils/types/layout.type";
import LandingLayout from "@layouts/landing";
import ServicesLayout from "@layouts/services";
import ServiceOverViewMap from "@components/services/overview/map";
import { Container } from "@mui/material";


const pageSeo: SeoProps = {
    title: "Services - SoftNet.LLC",
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
    url: "https://softnetllc.com/services"
}

const ServicesPage: FC = () => {
    return (
        <LandingLayout seo={pageSeo}>
            <ServicesLayout>
                <Container>
                    <ServiceOverViewMap/>
                </Container>
            </ServicesLayout>
        </LandingLayout>
    );
};

export default ServicesPage;

import React from "react";
import { NextPage } from "next";
import LandingLayout from "@layouts/landing";
import { SeoProps } from "@utils/types/layout.type";
import { useRouter } from "next/router";
import ServicesLayout from "@layouts/services";
import { Container } from "@mui/material";


const ServicePage: NextPage = () => {

    const router: any = useRouter();

    const { slug } = router.query;

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

    return (
        <LandingLayout seo={pageSeo}>
            <ServicesLayout>
                <Container>
                    Slug
                </Container>
            </ServicesLayout>
        </LandingLayout>
    );
};

export default ServicePage;

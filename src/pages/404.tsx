import React from "react";
import { NextPage } from "next";
import LandingLayout from "@layouts/landing";
import { SeoProps } from "@utils/types/layout.type";
import { H1 } from "@components/shared/heading";
import { P1 } from "@components/shared/paragraph";
import PageCenter from "@components/shared/paper/center";
import { Button, Stack, useTheme } from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";

const pageSeo: SeoProps = {
    title: "404 page not found - SoftNet.LLC",
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
        "US web services"
    ],
    url: "https://softnetllc.com"
}

const NotFoundPage: NextPage = () => {
    const theme = useTheme();
    const router: any = useRouter();

    return (
        <LandingLayout seo={pageSeo}>
            <PageCenter>
                <Stack
                    style={{ textAlign: "center", alignItems: "center" }}
                    spacing={3}>
                    <H1 style={{ fontSize: 150, lineHeight: 1, color: theme.palette.secondary.main }}>
                        404
                    </H1>
                    <P1 style={{ fontSize: 18, marginBottom: 24 }}>
                        Error - Page Not Found
                    </P1>
                    <Button
                        onClick={()=>{router.push("/")}}
                        startIcon={<HomeOutlined/>}
                        size="large"
                        color="info"
                        variant="contained">
                        Go to Home
                    </Button>
                </Stack>
            </PageCenter>
        </LandingLayout>
    );
};

export default NotFoundPage;

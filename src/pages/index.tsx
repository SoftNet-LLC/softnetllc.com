import { NextPage } from "next";
import Head from "next/head";

import LandingLayout from "layouts/landing";
import {
    HomeAbout,
    HomeAction,
    HomeBlogs,
    HomeChallenge,
    HomeExpertise,
    HomeHero,
    HomePartners,
    HomeProjects,
    HomeTestMinals,
} from "components/home";


const Home: NextPage = () =>
{
    return (
        <LandingLayout>
            <Head>
                <title>Home | SoftNet.LLC</title>
            </Head>

            <HomeHero />

            <HomePartners />

            {/*<HomeAbout />*/}

            {/*<HomeExpertise />*/}

            {/*<HomeProjects />*/}

            {/*<HomeTestMinals />*/}

            {/*<HomeChallenge />*/}

            {/*<HomeBlogs />*/}

            {/*<HomeAction />*/}
        </LandingLayout>
    );
};

export default Home;

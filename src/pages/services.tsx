import { NextPage } from 'next';
import Head from 'next/head';

import LandingLayout from 'layouts/landing';

const Services: NextPage = () => {
    return (
        <LandingLayout>
            <Head>
                <title>Services | Softnet.llc</title>
            </Head>
        </LandingLayout>
    );
};

export default Services;

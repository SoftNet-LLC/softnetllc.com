import { NextPage } from 'next';
import Head from 'next/head';

import LandingLayout from 'layouts/landing';

const Testminals: NextPage = () => {
    return (
        <LandingLayout>
            <Head>
                <title>Developers | Softnet.llc</title>
            </Head>
        </LandingLayout>
    );
};

export default Testminals;

import { NextPage } from 'next';
import Head from 'next/head';

import LandingLayout from 'layouts/landing';

const Blogs: NextPage = () => {
    return (
        <LandingLayout>
            <Head>
                <title>Blogs | Softnet.llc</title>
            </Head>
        </LandingLayout>
    );
};

export default Blogs;

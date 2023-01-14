import { NextPage } from 'next';
import Head from 'next/head';

import LandingLayout from 'layouts/landing';
import ConversationForm from "components/conversation/form";

const Conversation: NextPage = () => {
    return (
        <LandingLayout>
            <Head>
                <title>Conversation | Softnet.llc</title>
            </Head>

            <ConversationForm/>
        </LandingLayout>
    );
};

export default Conversation;

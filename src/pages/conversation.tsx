import React, { FC, useState } from "react";
import ConversationLayout from "@layouts/conversation";
import ConversationName from "@components/conversation/name";
import ConversationEmail from "@components/conversation/email";
import ConversationWelcome from "@components/conversation/welcome";
import ConversationPhone from "@components/conversation/phone";
import ConversationTitle from "@components/conversation/title";
import ConversationDescription from "@components/conversation/description";
import ConversationBudget from "@components/conversation/budget";
import ConversationDeadline from "@components/conversation/deadline";
import ConversationContacts from "@components/conversation/contact";
import ConversationAdditional from "@components/conversation/additional";
import ConversationFinish from "@components/conversation/finish";
import ConversationFiles from "@components/conversation/files";
import ConversationLinks from "@components/conversation/links";
import { useStore } from "effector-react";
import { $conversation } from "@store/converstaion/state";
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
    url: "https://softnetllc.com/conversation"
}

const ConversationPage: FC = () => {
    const cvs = useStore($conversation)

    return (
        <ConversationLayout seo={pageSeo}>
            {{
                name: <ConversationName/>,
                welcome: <ConversationWelcome/>,
                email: <ConversationEmail/>,
                phone: <ConversationPhone/>,
                title: <ConversationTitle/>,
                description: <ConversationDescription/>,
                budget: <ConversationBudget/>,
                deadline: <ConversationDeadline/>,
                contacts: <ConversationContacts/>,
                additional: <ConversationAdditional/>,
                links: <ConversationLinks/>,
                files: <ConversationFiles/>,
                finish: <ConversationFinish/>,
            }[cvs.current]}
        </ConversationLayout>
    );
};

export default ConversationPage;

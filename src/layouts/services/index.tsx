import React, { FC, Fragment, useEffect, useState } from "react";
import ServicesHero from "@components/services/hero";
import IconTab, { TabType } from "@components/shared/tab/icon";
import {
    Addchart,
    Api,
    CurrencyBitcoin,
    DevicesOther,
    FindInPage,
    ManageSearch,
    PhoneIphone,
    Terminal
} from "@mui/icons-material";
import { Children } from "@utils/types/layout.type";
import { Container } from "@mui/material";
import { useRouter } from "next/router";


interface Props {
    children?: Children
}

const ServicesLayout: FC<Props> = (props) => {
    const { children } = props
    const router: any = useRouter();

    const tabs: TabType[] = [
        {
            value: "overview",
            label: "Overview",
            icon: <DevicesOther/>,
            title: "Soft Net services",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sin",
            button: "Start Conversation",
            link: "/services/web",
            image: ""
        },
        {
            value: "web",
            label: "Websites",
            icon: <DevicesOther/>,
            title: "Websites Development",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sin",
            button: "Start Conversation",
            link: "/services/web",
            color: "#d84924",
            image: "/temp/web.png"
        },
        {
            value: "mobile",
            label: "Mobile Apps",
            icon: <PhoneIphone/>,
            title: "Mobile App Development",
            description: "n an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
            button: "Start Conversation",
            link: "/services/web",
            color: "#615ef2",
            image: "/temp/mobile.png"
        },
        {
            value: "netsuite",
            label: "Oracle Netsuite",
            icon: <Api/>,
            title: "Oracle Netsuite Service",
            description: "ntent of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to u",
            button: "Start Conversation",
            link: "/services/web",
            color: "#577095",
            image: "/temp/netsuite.png"
        },
        {
            value: "seo",
            label: "Seo Optimization",
            icon: <ManageSearch/>,
            title: "Seo Optimization Service",
            description: "andomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there",
            button: "Start Conversation",
            link: "/services/web",
            color: "#3f7fe7",
            image: "/temp/seo.png"
        },
        {
            value: "software",
            label: "Software Architecture",
            icon: <Terminal/>,
            title: "Software Architecture",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
            button: "Start Conversation",
            link: "/services/web",
            color: "#282c34",
            image: "/temp/software.png"
        },
        {
            value: "scrapping",
            label: "Web Scrapping",
            icon: <FindInPage/>,
            title: "Web Scrapping Service",
            description: "But I musleasure n and I will give you a system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, ",
            button: "Start Conversation",
            link: "/services/web",
            color: "#00ab00",
            image: "/temp/scrapping.webp"
        },
        {
            value: "data",
            label: "Data Processing",
            icon: <Addchart/>,
            title: "Data Processing Service",
            description: "oing through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections ",
            button: "Start Conversation",
            link: "/services/web",
            color: "#0c0a39",
            image: "/temp/data.png"
        },
        {
            value: "blockchain",
            label: "BlockChain",
            icon: <CurrencyBitcoin/>,
            title: "Blockchain & Dapp",
            description: "oing through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections ",
            button: "Start Conversation",
            link: "/services/blockchain",
            color: "#F7931A",
            image: "/temp/coin.png"
        }
    ]

    const [tab,setTab] = useState<TabType>({
        value: "overview",
        label: "Overview",
        icon: <DevicesOther/>,
        title: "Soft Net services",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sin",
        button: "Start Conversation",
        link: "/services/web",
        image: ""
    });
    const tabChangeHandle = (t: TabType) => {
        setTab(t);
    }

    useEffect(()=>{
    }, [])


    return (
        <Fragment>
            <ServicesHero tab={tab}/>

            <Container>
                <IconTab
                    tabs={tabs}
                    defaultValue="overview"
                    onChange={tabChangeHandle}/>
            </Container>

            {children}
        </Fragment>
    );
};



export default ServicesLayout;

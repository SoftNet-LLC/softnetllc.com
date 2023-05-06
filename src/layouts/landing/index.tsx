import React, { FC, Fragment } from "react";
import { LayoutType } from "@utils/types/layout.type";
import SeoHead from "@components/shared/seo/head";
import LandingHeader from "./components/header";
import useBreakpoints from "@utils/hooks/breakpoints.hooks";
import { BreakpointType } from "@utils/types/breakpoint.type";
import LandingFooter from "@layouts/landing/components/footer";
import NotificationMessage from "@components/shared/notification";


const LandingLayout: FC<LayoutType> = (props) => {
    const { children, seo } = props
    const bkp: BreakpointType = useBreakpoints();

    return (
        <Fragment>
            <SeoHead {...seo}/>
            <LandingHeader/>
            <NotificationMessage/>

            <main style={{ minHeight: "100vh" }}>
                {children}
            </main>
            <LandingFooter/>
        </Fragment>
    );
};

export default LandingLayout;

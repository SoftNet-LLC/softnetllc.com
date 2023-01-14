import React, { FC, Fragment } from "react";
import { LandingFooter, LandingHeader } from "./component";
import NavBar from "./component/nav";
import useBreakpoints, { BreakpointType } from "utils/hooks/breakpoints.hooks";

interface Props {
    children?: any;
}

const LandingLayout: FC<Props> = (props) =>
{
    const { children } = props;

    const bkp: BreakpointType = useBreakpoints();


    return (
        <Fragment>
            <LandingHeader />

            {
                bkp !== "mob" && <NavBar />
            }

            {children}

            <LandingFooter />
        </Fragment>
    );
};

export default LandingLayout;

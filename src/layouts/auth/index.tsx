import React, { FC, Fragment } from "react";
import AuthLayoutWrap from "./style/wrap";
import { LayoutType } from "@utils/types/layout.type";
import SeoHead from "@components/shared/seo/head";
import { LogoLink } from "@layouts/landing/components/header/style";

const AuthLayout: FC<LayoutType> = (props) => {
    const { seo, children } = props

    return (
        <Fragment>
            <SeoHead {...seo}/>
            <AuthLayoutWrap>
                <LogoLink
                    className="logo"
                    href="/">
                    <div style={{
                        color: "#ffffff",
                        fontSize: 32,
                        fontWeight: 700,
                        letterSpacing: 2 }}>
                        <span style={{ color: "#e32652", fontFamily: "'Big Shoulders Text', cursive" }}>S</span>
                        <span style={{ letterSpacing: 0, fontFamily: "'Big Shoulders Text', cursive" }}>nT</span>
                    </div>
                </LogoLink>
                {children}
            </AuthLayoutWrap>
        </Fragment>
    );
};

export default AuthLayout;

import React, { FC, Fragment } from "react";
import AuthLayoutWrap from "./style/wrap";
import { LayoutType } from "@utils/types/layout.type";
import Link from "next/link";
import Image from "next/image";
import { AUTH_BG, LOGO } from "@assets/images";
import SeoHead from "@components/shared/seo/head";

const AuthLayout: FC<LayoutType> = (props) => {
    const { seo, children } = props

    return (
        <Fragment>
            <SeoHead {...seo}/>
            <AuthLayoutWrap>
                <Image
                    className="auth-background"
                    width={1920}
                    height={1200}
                    src={AUTH_BG}
                    placeholder="blur"
                    alt="Auth Background"/>
                <Link href="/">
                    <Image
                        className="logo-image"
                        src={LOGO}
                        alt="Logo"/>
                </Link>
                {children}
            </AuthLayoutWrap>
        </Fragment>
    );
};

export default AuthLayout;

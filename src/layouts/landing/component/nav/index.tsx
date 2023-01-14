import React, { FC } from "react";
import { Button, Container } from "@mui/material";
import { LandingNavWrap } from "./styles";
import { useRouter } from "next/router";
import { menus } from "../header/menus";

const NavBar: FC = () =>
{
    const router: any = useRouter();

    return (
        <LandingNavWrap>
            <Container>
                {
                    menus.map((menu, i) => (
                        <Button
                            key={`menu-${i}`}
                            onClick={() =>
                            {
                                router.push(menu.link);
                            }}
                        >
                            { menu.label }
                        </Button>
                    ))
                }
            </Container>
        </LandingNavWrap>
    );
};

export default NavBar;

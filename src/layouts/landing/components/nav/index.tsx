import React, { FC } from "react";
import { useRouter } from "next/router";
import { Button, Container } from "@mui/material";
import NavWarp from "./style/wrap";
import { menus } from "../menu";

const NavBar: FC = () => {
    const router: any = useRouter();

    return (
        <NavWarp>
            <Container>
                {
                    menus.map((menu, i) => (
                        <Button
                            key={`menu-${i}`}
                            onClick={() => {
                                router.push(menu.link);
                            }}>
                            {menu.label}
                        </Button>
                    ))
                }
            </Container>
        </NavWarp>
    );
};

export default NavBar;

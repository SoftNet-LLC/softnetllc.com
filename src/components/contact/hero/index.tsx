import React, { FC } from "react";
import ContactHeroWrap from "./style/wrap";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import Link from "next/link";
import {
    ArrowRightOutlined,
    EmailOutlined,
    EmojiTransportation,
    FaxOutlined,
    PhoneInTalkOutlined
} from "@mui/icons-material";
import { BaseMap } from "@components/shared/map";


const ContactHero: FC = () => {
    const position = {
        lat: 51.505,
        lng: -0.09
    }

    return (
        <ContactHeroWrap>
            <div className="map-area">
                <BaseMap/>
            </div>
            <div className="contact-info">
                <Container>
                    <Grid
                        justifyContent="center"
                        spacing={3}
                        container>
                        <Grid>
                            <div className="contact-info-card">
                                <h2><EmojiTransportation/>Main Office</h2>
                                <p>312 Yauger Way NW</p>
                                <p>Olympia, WA 98502</p>
                            </div>
                        </Grid>
                        <Grid>
                            <div className="contact-info-card">
                                <h2><PhoneInTalkOutlined/> Phone Number</h2>
                                <p>
                                    <Link href="mailto:nicholijin@gmail.com">
                                        <ArrowRightOutlined/>
                                        +1 (253) 533-2244
                                    </Link>
                                </p>
                                <p>
                                    <Link href="mailto:nicholijin@gmail.com">
                                        <ArrowRightOutlined/>
                                        +44 (xxx) xxx-xxxx
                                    </Link>
                                </p>
                                <p>
                                    <Link href="mailto:nicholijin@gmail.com">
                                        <ArrowRightOutlined/>
                                        +86 (186) 4066-4692
                                    </Link>
                                </p>
                            </div>
                        </Grid>
                        <Grid>
                            <div className="contact-info-card">

                                <h2><EmailOutlined/>Email</h2>
                                <p>
                                    <Link href="mailto:nicholijin@gmail.com">
                                        <ArrowRightOutlined/>
                                        offic@softnetllc.com
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        href="mailto:nicholijin@gmail.com">
                                        <ArrowRightOutlined/>
                                        nicholi@softnetllc.com
                                    </Link>
                                </p>
                                <p>
                                    <Link href="mailto:nicholijin@gmail.com">
                                        <ArrowRightOutlined/>
                                        nicholijin@gmail.com
                                    </Link>
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </ContactHeroWrap>
    );
};

export default ContactHero;

import React, { FC } from "react";
import ContactFormWrap from "./style/wrap";
import Grid from "@mui/material/Unstable_Grid2";
import {
    Container,
    FormControl,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import { H2 } from "@components/shared/heading";
import { ActionButton } from "@components/shared/button";
import { P3 } from "@components/shared/paragraph";
import Label from "@components/shared/input/label";

const ContactForm: FC = () => {
    return (
        <ContactFormWrap>
            <Container>
                <Grid
                    justifyContent="center"
                    container>
                    <Grid
                        lg={7}
                        xs={12}>
                        <div className="contact-form-card">
                            <H2>Contact Us</H2>
                            <P3>Have questions? Need to get in touch?</P3>
                            <Grid
                                container
                                spacing={3}>
                                <Grid xs={12}>
                                    <Label htmlFor="label">Your Name*</Label>
                                    <TextField
                                        placeholder="Enter your name"
                                        fullWidth
                                        id="name"
                                        name="name" />
                                </Grid>
                                <Grid xs={12}>
                                    <Label htmlFor="email">Your Email*</Label>
                                    <TextField
                                        placeholder="Enter your email"
                                        id="email"
                                        name="email"
                                        fullWidth/>
                                </Grid>
                                <Grid xs={12}>
                                    <Label htmlFor="subject">Your Subject*</Label>
                                    <FormControl fullWidth>
                                        <Select
                                            placeholder="Select subject"
                                            id="subject"
                                            name="subject">
                                            <MenuItem value="general">General Inquiry/question</MenuItem>
                                            <MenuItem value="start">I want an estimate for my project/idea</MenuItem>
                                            <MenuItem value="start">I need support for a completed project</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid xs={12}>
                                    <Label htmlFor="message">Your Message*</Label>
                                    <TextField
                                        id="message"
                                        name="message"
                                        multiline
                                        fullWidth
                                        minRows={4}
                                        maxRows={4}
                                    />
                                </Grid>
                                <Grid xs={12}>
                                    <ActionButton
                                        color="primary"
                                        variant="contained">
                                        Submit
                                    </ActionButton>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </ContactFormWrap>
    );
};

export default ContactForm;

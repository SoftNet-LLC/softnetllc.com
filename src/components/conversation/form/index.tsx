import { FC } from "react";
import { useRouter } from "next/router";
import { Card, CardContent, Container, Grid, Stack } from "@mui/material";
import * as Yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";

import { ConversationFormWrap, FormInput, SubmitButton } from "./styles";


const ConversationForm: FC = () => 
{
    const router = useRouter();

    const ConversationSchema = Yup.object().shape(
        {
            firstname: Yup.string().required("First Name is required"),
            lastname: Yup.string().required("Last Name is required"),
            email: Yup.string().required("Email is required")
        }
    )

    const formik = useFormik(
        {
            initialValues: {
                firstname: "",
                lastname: "",
                email: "",
            },
            validationSchema: ConversationSchema,
            onSubmit: () => 
            {

            }
        }
    )

    const {
        errors,
        touched,
        values,
        isSubmitting,
        handleSubmit,
        getFieldProps
    } = formik;


    return (
        <ConversationFormWrap>
            <Container>
                <FormikProvider value={formik}>
                    <Form
                        autoComplete="off"
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <Grid
                            container
                            justifyContent="center"
                        >
                            <Grid
                                item
                                xs={6}
                            >
                                <Card>
                                    <CardContent>
                                        <Stack
                                            direction="column"
                                            spacing={2}
                                        >
                                            <FormInput
                                                fullWidth
                                                autoComplete="firstname"
                                                type="firstname"
                                                label="First Name"
                                                error={Boolean(
                                                    touched.firstname && errors.firstname
                                                )}
                                                helperText={
                                                    touched.firstname &&
                                                    errors.firstname?.toString()
                                                }
                                                {...getFieldProps("firstname")}
                                            />
                                            <FormInput
                                                fullWidth
                                                autoComplete="lastname"
                                                type="lastname"
                                                label="Last Name"
                                                error={Boolean(
                                                    touched.lastname && errors.lastname
                                                )}
                                                helperText={
                                                    touched.lastname &&
                                                    errors.lastname?.toString()
                                                }
                                                {...getFieldProps("lastname")}
                                            />
                                            <FormInput
                                                fullWidth
                                                autoComplete="email"
                                                type="email"
                                                label="Email"
                                                error={Boolean(
                                                    touched.email && errors.email
                                                )}
                                                helperText={
                                                    touched.email &&
                                                    errors.email?.toString()
                                                }
                                                {...getFieldProps("email")}
                                            />
                                            <SubmitButton
                                                fullWidth
                                                variant="contained"
                                                size="large"
                                                type="submit"
                                                loading={isSubmitting}
                                            >
                                                Login
                                            </SubmitButton>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Form>
                </FormikProvider>
            </Container>
        </ConversationFormWrap>
    )
}


export default ConversationForm

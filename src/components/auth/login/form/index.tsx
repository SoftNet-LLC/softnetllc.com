import { FC } from "react";
import { useRouter } from "next/router";
import { Checkbox, Divider, FormControlLabel, Stack } from "@mui/material";
import * as Yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";
import { FormInput, SubmitButton } from "components/shared/input";
import { FacebookOutlined } from "@mui/icons-material";


const LoginForm: FC = () =>
{
    const router = useRouter();

    const ConversationSchema = Yup.object().shape(
        {
            email: Yup.string().required("Email is required"),
            password: Yup.string().required("Password is required")
        }
    )

    const formik = useFormik(
        {
            initialValues: {
                email: "",
                password: "",
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
        <FormikProvider value={formik}>
            <Form
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit}
            >
                <Stack
                    direction="column"
                    spacing={4}
                >
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

                    <FormInput
                        fullWidth
                        autoComplete="password"
                        type="password"
                        label="Password"
                        error={Boolean(
                            touched.password && errors.password
                        )}
                        helperText={
                            touched.password &&
                            errors.password?.toString()
                        }
                        {...getFieldProps("password")}
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="Remember Me"
                        labelPlacement="end"
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
                    <Divider>
                        Or
                    </Divider>
                    <Stack
                        direction="row"
                        spacing={2}
                    >
                        <SubmitButton
                            fullWidth
                            variant="contained"
                            color="secondary"
                            size="large"
                            type="submit"
                            loading={isSubmitting}
                        >
                            Login With Google
                        </SubmitButton>
                        <SubmitButton
                            fullWidth
                            variant="outlined"
                            color="secondary"
                            size="large"
                            type="submit"
                            loading={isSubmitting}
                            startIcon={<FacebookOutlined/>}
                        >
                            Login With Facebook
                        </SubmitButton>
                    </Stack>
                </Stack>
            </Form>
        </FormikProvider>
    )
}


export default LoginForm

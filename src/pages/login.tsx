import { NextPage } from "next";
import { AuthLayout } from "layouts";
import { LoginForm } from "components/auth/login";

const LoginPage: NextPage = () =>
{

    return (
        <AuthLayout>
            <LoginForm/>
        </AuthLayout>
    )
}

export default LoginPage

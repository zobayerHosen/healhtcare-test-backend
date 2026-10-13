import { auth } from "../../lib/auth"

interface ICreateUser {
    name: string,
    email: string,
    password: string
};

interface ILoginUser {
    email: string,
    password: string
}


const createUser = async (payload: ICreateUser) => {
    const { name, email, password } = payload;

    const data = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password
        }
    });

    if (!data.user) {
        throw new Error("Failed to register user")
    };

    return data;
};

const loginUser = async (payload: ILoginUser) => {
    const { email, password } = payload;
    const data = await auth.api.signInEmail({
        body: {
            email,
            password
        }
    });

    return data;
}

export const AuthService = {
    createUser,
    loginUser
}
import { auth } from "../../lib/auth"
import { prisma } from "../../lib/prisma";

import { Role } from "../../../generated/prisma/enums";

interface ICreateUser {
    name: string;
    email: string;
    password: string;
    contactNumber?: string;
    address?: string;
    profilePhoto?: string;
    patient?: {
        contactNumber?: string;
        address?: string;
        profilePhoto?: string;
    };
    role?: Role;
}

interface ILoginUser {
    email: string;
    password: string;
}

const createUser = async (payload: ICreateUser) => {
    const { name, email, password, contactNumber, address, profilePhoto, role } = payload;

    // 1. Create the user in Better-Auth
    const authData = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            role: Role.PATIENT,
        },
    });

    if (!authData?.user) {
        throw new Error("Failed to register user");
    }

    // 2. Create the associated Patient profile with rollback protection (Compensating Transaction)
    try {
        const patient = await prisma.patient.create({
            data: {
                userId: authData.user.id,
                name,
                email,
                contactNumber,
                address,
                profilePhoto,
            },
        });

        return {
            ...authData,
            patient,
        };
    } catch (error) {
        // Rollback: delete created user to avoid orphaned records in the database
        await prisma.user.delete({
            where: { id: authData.user.id },
        }).catch((rollbackError) => {
            console.error("Failed to rollback user creation:", rollbackError);
        });

        throw error;
    }
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
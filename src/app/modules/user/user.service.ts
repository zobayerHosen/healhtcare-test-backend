import { Role, Speciality } from '../../../generated/prisma/client';
import { auth } from '../../lib/auth';
import { prisma } from '../../lib/prisma';
import { ICreateDoctorPayload } from "./user.interface";


const createDoctor = async (payload: ICreateDoctorPayload) => {
    const specialties: Speciality[] = [];

    // find specialties by their IDs and add them to the specialties array
    for (const specialtyId of payload.specialties) {
        const specialty = await prisma.speciality.findUnique({
            where: {
                id: specialtyId
            }
        });
        if (!specialty) {
            throw new Error(`Speciality with this ID not found`);
        }
        specialties.push(specialty);
    };

    // check if user with the same email already exists
    const userExists = await prisma.user.findUnique({
        where: {
            email: payload.doctor.email
        }
    });
    if (userExists) {
        throw new Error(`User with this email  already exists`);
    };

    // sign up user
    const userData = await auth.api.signUpEmail({
        body: {
            name: payload.doctor.name,
            email: payload.doctor.email,
            password: payload.password,
            role: Role.DOCTOR,
            needPasswordChange: true
        }
    });

};


export const userService = {
    createDoctor    
};

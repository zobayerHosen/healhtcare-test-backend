import { Speciality } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpeciality = async (payload: Speciality): Promise<Speciality> => {
    const speciality = await prisma.speciality.create({
        data: payload
    });
    return speciality;
};

const getAllSpeciality = async () => {
    const specialityData = await prisma.speciality.findMany();
    return specialityData;
};

const deletedSpeciality = async (id: string): Promise<Speciality> => {
    const deletedData = await prisma.speciality.delete({
        where: {
            id
        }
    });
    return deletedData;
};


const updateSpeciality = async (id: string, payload: Speciality): Promise<Speciality> => {
    const updateData = await prisma.speciality.update({
        where: {
            id
        },
        data: payload
    });
    return updateData;
};

export const SpecialityService = {
    createSpeciality,
    getAllSpeciality,
    deletedSpeciality,
    updateSpeciality
}
import { Request, Response } from "express";
import { SpecialityService } from "./speciality.service";

const createSpeciality = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const result = await SpecialityService.createSpeciality(payload);

        res.status(201).json({
            success: true,
            message: "Speciality created successfully",
            statusCode: 201,
            data: result,
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to create speciality data.",
            statusCode: 500,
            error: error.message
        })
    }
};

const getAllSpeciality = async (req: Request, res: Response) => {
    try {
        const result = await SpecialityService.getAllSpeciality();
        res.status(200).json({
            success: true,
            message: "Specialities fetched successfully",
            statusCode: 200,
            data: result,
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch speciality data.",
            statusCode: 500,
            error: error.message
        })
    }
};

const deleteSpeciality = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await SpecialityService.deletedSpeciality(id as string);

        res.status(200).json({
            success: true,
            message: "Speciality deleted successfully",
            statusCode: 200,
            data: result,
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to delete speciality data.",
            statusCode: 500,
            error: error.message
        })
    }
};


const updateSpeciality = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = await SpecialityService.updateSpeciality(id as string, payload);

        res.status(200).json({
            success: true,
            message: "Speciality updated successfully",
            statusCode: 200,
            data: result,
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to update speciality data.",
            statusCode: 500,
            error: error.message
        })
    }
}


export const SpecialityController = {
    createSpeciality,
    getAllSpeciality,
    deleteSpeciality,
    updateSpeciality
};
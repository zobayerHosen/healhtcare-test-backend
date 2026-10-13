import { Request, Response } from "express";
import { SpecialityService } from "./speciality.service";
import { catchAsync } from "../../shared/catchFunction";
import { sendResponse } from "../../shared/sendResponse";

const createSpeciality = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body;
        const result = await SpecialityService.createSpeciality(payload);

        sendResponse(req, res, {
            httpStatusCode: 201,
            message: "Speciality created successfully",
            success: true,
            data: result,
        })
    }
);


const getAllSpeciality = catchAsync(
    async (req: Request, res: Response) => {
        const result = await SpecialityService.getAllSpeciality();
        sendResponse(req, res, {
            httpStatusCode: 200,
            success: true,
            message: "Specialities fetched successfully",
            data: result,
        });
    }
)

const deleteSpeciality = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const result = await SpecialityService.deletedSpeciality(id as string);

        sendResponse(req, res, {
            httpStatusCode: 200,
            success: true,
            message: "Speciality deleted successfully",
            data: result,
        });
    }
)


const updateSpeciality = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const payload = req.body;
        const result = await SpecialityService.updateSpeciality(id as string, payload);

        sendResponse(req, res, {
            httpStatusCode: 200,
            success: true,
            message: "Speciality updated successfully",
            data: result,
        });
    }
)


export const SpecialityController = {
    createSpeciality,
    getAllSpeciality,
    deleteSpeciality,
    updateSpeciality
};
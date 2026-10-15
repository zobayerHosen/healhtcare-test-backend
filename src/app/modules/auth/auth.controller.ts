import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchFunction";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";

const createUser = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body;
        const result = await AuthService.createUser(payload);

        sendResponse(req, res, {
            httpStatusCode: StatusCodes.CREATED,
            success: true,
            message: "User created successfully",
            data: result,
        });
    }
);


const loginUser = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body;
        const result = await AuthService.loginUser(payload);

        sendResponse(req, res, {
            httpStatusCode: StatusCodes.OK,
            success: true,
            message: "User logged in successfully",
            data: result
        });
    }
)

export const AuthController = {
    createUser,
    loginUser
};
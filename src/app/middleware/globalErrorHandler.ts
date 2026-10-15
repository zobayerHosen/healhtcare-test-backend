import { NextFunction, Request, Response } from "express";
import { envVars } from "../../config/env";
import { StatusCodes } from "http-status-codes";

export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if (envVars.NODE_ENV === 'development') {
        console.error("Error from Global Error Handler", err);
    }

    let statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR;
    let message: string = 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: err.message || message,
        error: err.message
    });
};
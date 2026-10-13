import { Request, Response } from "express";

interface IApiResponse<T> {
    success: boolean;
    message: string;
    httpStatusCode: number;
    data?: T;
};

export const sendResponse = <T>(req: Request, res: Response, responseData: IApiResponse<T>) => {
    const { success, message, httpStatusCode, data } = responseData;

    res.status(httpStatusCode).json({
        success,
        message,
        httpStatusCode,
        data,
    });
};
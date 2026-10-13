import express, { type Application, type Request, type Response } from "express";
import { IndexRoutes } from "./app/routes";
import { prisma } from "./app/lib/prisma";

export const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());


app.use("/api/v1", IndexRoutes)



app.get('/', async (req: Request, res: Response) => {

    const specialty = await prisma.speciality.create({
        data: {
            title: 'Cardiology'
        }
    })
    res.status(201).json({
        success: true,
        message: 'API is working',
        data: specialty
    })
});
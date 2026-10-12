import { Router } from "express";
import { SpecialityRoutes } from "../modules/speciality/speciality.routes";
import { AuthRoutes } from "../modules/auth/auth.route";
const router = Router();

router.use("/specialities", SpecialityRoutes);
router.use("/auth", AuthRoutes);

export const IndexRoutes = router;

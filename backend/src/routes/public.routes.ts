import Router from "express";
import { getCountries } from "../controllers/public.controller";

const router = Router();

router.route("/").get(getCountries);

export default router;

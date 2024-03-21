import { Request, Response } from "express";
import countryCodeJson from "../json/countrycode.json";

export async function getCountries(req: Request, res: Response) {
  res.status(200).send(countryCodeJson);
}

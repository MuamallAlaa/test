import { Request, Response } from "express";
import * as citiesService from "./cities.service";

export const getCity = async (req: Request, res: Response) => {
  const cityId = parseInt(req.params.cityId);
  const distance = parseFloat(req.params.distance);
  const city = await citiesService.findUnique({
    where: {
      id: cityId,
    },
  });
  const cities = await citiesService.executeQuery(city, distance);

  return res.json({ data: cities });
};

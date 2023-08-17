import { Router } from "express";
import { Prisma, City } from ".prisma/client";
import { prisma } from "../../prisma/prisma.service";
import * as citiesController from "./cities.controller";

const router = Router();

router.get("/:cityId/:distance", citiesController.getCity);
// async (req, res) => {

//   const query = `
// SELECT
// c.id,
// c.name,
// c.latitude,
// c.longitude
// FROM
// "City" c
// WHERE
// ST_DWithin(
//     ST_MakePoint(c.longitude, c.latitude)::geometry,
//     ST_MakePoint(-74.0060, 40.7128)::geometry,
//     500
// )
//     `;

//   try {
//     const nearbyCities = await prisma.$queryRaw`SELECT
//     c.id,
//     c.name,
//     c.latitude,
//     c.longitude
//     FROM
//     "City" c
//     WHERE
//     ST_DWithin(
//         ST_MakePoint(c.longitude, c.latitude)::geometry,
//         ST_MakePoint(-74.0060, 40.7128)::geometry,
//         ${d}
//     )`;
//   } catch (e) {
//     console.log(e);
//   }
// });

export { router as cityRouter };

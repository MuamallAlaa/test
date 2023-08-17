import { Prisma, City } from ".prisma/client";
import { prisma } from "../../prisma/prisma.service";

export const reshape = (cities: City[]) => {
  return cities;
};

export const findUnique = async (args: Prisma.CityFindUniqueArgs) => {
  const city = await prisma.city.findUnique(args);
  const [reshapedCity] = reshape([city as City]);
  return reshapedCity;
};
export const executeQuery = async (city: any, distance: any) => {
  const result = await prisma.$queryRaw`SELECT
  c.id,
  c.name,
  c.latitude,
  c.longitude
FROM
  "City" c
WHERE
  ST_DWithin(
       ST_MakePoint(c.longitude, c.latitude)::geography,
  ST_MakePoint(${city.longitude}, ${city.latitude})::geography,
  ${distance}
  )`;
  return result;
};

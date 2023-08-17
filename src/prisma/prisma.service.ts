import { PrismaClient } from "@prisma/client";

// Prisma client
// export const prisma = new PrismaClient({
//   errorFormat: "pretty",
// });
export const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
  errorFormat: "pretty",
});

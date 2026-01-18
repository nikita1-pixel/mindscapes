import { PrismaClient } from "@prisma/client";

// This prevents multiple instances of Prisma Client in development
const prismaClientSingleton = () => {
    return new PrismaClient();
};

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
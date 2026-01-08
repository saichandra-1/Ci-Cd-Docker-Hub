import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import { PrismaClient } from './prisma/generated/prisma/client'

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
export const prismaClient = new PrismaClient({ adapter });

console.log("Prisma Client initialized");
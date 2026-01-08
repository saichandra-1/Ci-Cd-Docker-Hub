import 'dotenv/config';  // Loads .env vars
import { defineConfig } from '@prisma/config';  // Install if needed: bun add @prisma/config

export default defineConfig({
    schema: './schema.prisma',  // Path to your schema file
    datasource: {
        url: process.env.DATABASE_URL  // Pulls from .env
    },
    // Optional: Customize migrations path if not default
    migrations: {
        path: './migrations'
    }
});
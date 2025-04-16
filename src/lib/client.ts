import { PrismaClient } from '@prisma/client';

// For TypeScript
declare global {
    var prisma: PrismaClient | undefined;
}

// Create a new PrismaClient instance
let prismaInstance: PrismaClient;

// Initialize in a try-catch to handle potential errors
try {
    prismaInstance = global.prisma || new PrismaClient();

    // In development, save to global to prevent multiple instances
    if (process.env.NODE_ENV !== "production") {
        global.prisma = prismaInstance;
    }
} catch (error) {
    console.error("Failed to initialize Prisma client:", error);
    // Provide a fallback or rethrow based on your needs
    throw new Error("Database connection failed");
}

export const prisma = prismaInstance;
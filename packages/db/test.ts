import { prismaClient } from "./index.ts";

// async function generateuser() {
//     const result = await prismaClient.user.create({
//         data: {
//             username: "Sai Chandra",
//             password: "saichandra3232"
//         }
//     });
//     console.log(result);
// }

// generateuser();


// async function getusers() {
//     const result = await prismaClient.user.findMany();
//     console.log(result);
// }

// getusers();


console.log(process.env.DATABASE_URL);
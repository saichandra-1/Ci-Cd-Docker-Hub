import { prismaClient } from "./index";

const response = await prismaClient.user.create({
    data: {
        username: "user1",
        password: "password1"
    }
})
console.log("response")
console.log(response)
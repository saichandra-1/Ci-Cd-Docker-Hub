import { prismaClient } from "db/client";

console.log("in the websocket");

Bun.serve({
    port: 8081,
    fetch(req, server) {
        if (server.upgrade(req)) {
            return;
        }
        return new Response("Upgrade failed", { status: 500 });
    },
    websocket: {
        async message(ws, message) {  // Make it async
            console.log("Message received:", message);
            try {
                const newUser = await prismaClient.user.create({  // Await the Promise
                    data: {
                        username: Math.random().toString(),
                        password: Math.random().toString()
                    }
                });
                console.log("User created successfully:", newUser);  // Log success for verification
            } catch (error) {
                console.error("Error creating user:", error);  // This will show the exact issue
            }
            ws.send(message);
        },
    },
});

console.log("websocket started");
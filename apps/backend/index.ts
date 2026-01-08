import { prismaClient } from "db/client";
import express from "express";

const app = express();

app.get('/', async (req, res) => {
    prismaClient.user.findMany().then((users) => {
        res.json(users)
    })
})

app.use(express.json());


app.post('/', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({
            message: "Username and passwod are required"
        })
        return;
    }
    prismaClient.user.create({
        data: {
            username,
            password
        }
    }).then((user) => {
        res.json(user)
    })
})

app.listen(3001);


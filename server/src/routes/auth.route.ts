import express from 'express'
import { prisma } from '../../lib/prisma';
import bcrypt from "bcryptjs"

const router = express.Router(); 

router.get('/auth-test', async (req, res) => {
    try {
        await prisma.user.create({
            data: {
                username: 'test-user',
                password: '123123'
            }
        })

        res.status(201).send('created')
    } catch(err) {
        console.log(err)
    }
})

router.post('/register', async (req, res) => {
    try {
        // await prisma.user.create({
        //     data: {
        //         username: 'test-user',
        //         password: '123123'
        //     }
        // })

        // res.status(201).send('created')
        const { username, password } = req.body;
        const userNameExists = await prisma.user.findFirst({
            where: { username: username }
        })

        if (userNameExists) {
            return res.status(409).json({ message: 'Username already taken.'})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        });

        res.status(201).json({ message: 'Registered successfully!'})
    } catch(err) {
        console.log(err)
    }
})

export default router;
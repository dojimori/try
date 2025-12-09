import { Request, Response } from 'express'
import { prisma } from '../../../lib/prisma';


export const getMe = async (req: Request, res: Response) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(404).json(null)
        }

        const fetchedUser = await prisma.user.findUnique({
            where: { id: user.id },
            include: {
                profile: true
            }

        })

       

        return res.status(200).json({ fetchedUser })
    } catch (err) {
        console.log(err)
    }
}

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const authed = req.session.user;
        const file = (req as any).profile;
        const {
            username,
            displayName,
            aboutMe,
            gender,
            country,
            likes,
            dislikes
        } = req.body;
        if (!authed) {
            return res.status(403);
        }

        const profilePicture = file ? `/uploads/profiles/${file.filename}` : undefined;

        console.log(profilePicture)

        await prisma.profile.upsert({
            where: { userId: authed.id },
            create: {
                displayName,
                profilePicture: profilePicture ?? undefined,
                gender,
                aboutMe,
                likes,
                dislikes,
                country,
                user: {
                    connect: { id: authed.id }
                }
            },
            update: {
                displayName,
                profilePicture: profilePicture ?? undefined,
                gender,
                aboutMe,
                likes,
                dislikes,
                country,
            }
        })

        const user = await prisma.user.findUnique({
            where: { id: authed.id },
            include: {
                profile: true
            }

        })
        // const user = await getMe();
        res.status(200).json({ user })
    } catch (error) {
        console.log(error)
    }
}
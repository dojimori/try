import { Router } from 'express'
import { getAllChats } from './chats.controller';
const router = Router();

router.get('/', getAllChats)

export default router;
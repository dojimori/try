import { upload } from '../../config/multer.config';
import express, { Response, Request } from 'express'
import { getMe, updateProfile } from './users.controller';

const router = express.Router();

router.get('/getme', getMe);
router.post('/profile/update', upload.single('profile'), updateProfile);


export default router;
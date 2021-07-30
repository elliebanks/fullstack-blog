import { Router } from 'express';
import blogsRouter from './blogs';

const router = Router();

router.use('/blogs', blogsRouter);

export default router;
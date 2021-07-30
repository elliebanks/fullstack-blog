import { Router } from 'express';
import db from '../db';

const router = Router();

// GET /api/blogs/
router.get('/', async (req, res) => {
    try {
        const blogs = await db.blogs.all();
        res.json(blogs);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ellie writes bad code', error });
    }
});

export default router;
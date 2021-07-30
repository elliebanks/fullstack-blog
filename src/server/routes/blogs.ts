import { Router } from 'express';
import db from '../db';

const router = Router();

// GET /api/blogs/1? -optional
router.get('/:blogid?', async (req, res) => {

    const blogid = Number(req.params.blogid);
    //route parameters are always string data types! (must tell it to be a number)

    try {
        if (blogid) {
            const [blog] = await db.blogs.one(blogid);
            //[blog] es6 array destructure: 
            //to make it represent the blog without an array wrapped around it
            //instead it will just be an object

            res.json(blog);
            //if it is a valid number (true), then it attempts to retrieve one blog post
            //if not, it will return all of the blog posts
        } else {
            const blogs = await db.blogs.all();
            res.json(blogs);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ellie writes bad code', error });
    }
});


// POST /api/blogs/
// Request Body { title: string, content: string }
router.post('/', async (req, res) => {
    const newBlog = req.body;
    //good practice to use in these situations is 'DTO' when creating variables: Data Transfer Object
    //example: const blogDTO = req.body;
    //keeps the routes & queries separated
    newBlog.authorid = 1;

    try {
        const result = await db.blogs.insert(newBlog);
        res.json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ellie writes bad code', error });
    }
});

// PUT /api/blogs/1
// Request Body { title: string, content: string }
router.put('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);
    const editBlog = req.body;
    //good practice to use in these situations is 'DTO' when creating variables: Data Transfer Object
    //example: const blogDTO = req.body;
    //keeps the routes & queries separated
    try {
        const result = await db.blogs.update(editBlog, blogid);
        res.json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ellie writes bad code', error });
    }
});

//DELETE /api/blogs/1
router.delete('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);

    try {
        const result = await db.blogs.destroy(blogid);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'ellie writes bad code', error });
    }
});



export default router;
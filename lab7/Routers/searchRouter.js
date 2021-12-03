import express from 'express';
import { Posts } from "../Models/postsModel.js";

//TODO: Роут для поиска
const router = express.Router();

//TODO: Написать запрос на поиск среди твиттов (просто по совпадению куска текста)
router.get('/', (req, res) => {
    Posts.find({text: { $regex: req.query.search}}, (err, post) => {
        if (err) {
            res.send('Posts not found')
        } else {
            res.send(post)
        }
    })
})


export default router
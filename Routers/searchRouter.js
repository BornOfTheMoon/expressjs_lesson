import express from 'express';
import fs from 'fs';

//TODO: Роут для поиска
const router = express.Router();

//TODO: Написать запрос на поиск среди твиттов (просто по совпадению куска текста)
router.post('/', (req, res) => {
    const data = fs.readFileSync('Data/posts.json', 'utf8');
    const posts = JSON.parse(data).filter((value) => value.text.includes(req.body.search));
    res.send(posts[0]);
})


export default router
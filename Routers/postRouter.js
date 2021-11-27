import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json());

const urlencodedParser = express.urlencoded({extended: false});

//TODO: Написать роут для твиттов (напр. /post)
const router = express.Router();

//TODO: Написать запрос для получения всех твиттов (пока можно хранить ввиде JSON файла или JS объекта)
router.get('/', (req, res) => {
    const data = fs.readFileSync('Data/posts.json', 'utf8');
    const posts = JSON.parse(data);
    res.send(posts);
});

//TODO: Написать запрос для получения твитта по его ID
router.get('/:id', (req, res) => {
    const data = fs.readFileSync('Data/posts.json', 'utf8');
    const posts = JSON.parse(data).filter((value) => value.id == req.params.id);
    res.send(posts[0]);
    // res.send('User id = ' + req.params.id);
})
//TODO: Написать POST запрос для отправки твитта (пока никуда записывать его не надо, нужно просто вернуть отправвленные данные назад)
router.post('/', urlencodedParser, (req, res) => {
    res.send(req.body)
})

export default router
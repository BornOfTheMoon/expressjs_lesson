import express from 'express';
import { Posts } from "../Models/postsModel.js";

const urlencodedParser = express.urlencoded({extended: false});

//TODO: Написать роут для твиттов (напр. /post)
const router = express.Router();

//TODO: Написать запрос для получения всех твиттов (пока можно хранить ввиде JSON файла или JS объекта)
router.get('/', (req, res) => {
    Posts.find({}, (err, post) => {
        if (err) {
            res.send('Posts not found')
        } else {
            res.send(post)
        }
    })
});

//TODO: Написать запрос для получения твитта по его ID
router.get('/:id', (req, res) => {
    Posts.findOne({id: req.params.id}, (err, post) => {
        if (err) {
            res.send('Post not found')
        } else {
            res.send(post)
        }
    })
    // res.send('User id = ' + req.params.id);
})
//TODO: Написать POST запрос для отправки твитта (пока никуда записывать его не надо, нужно просто вернуть отправвленные данные назад)
router.post('/', urlencodedParser, (req, res) => {
    const newPost = new Posts({
        id: req.body.id,
        avatar: req.body.avatar,
        displayName: req.body.displayName,
        verified: req.body.verified,
        username: req.body.username,
        timeLeft: req.body.timeLeft,
        text: req.body.text,
        image: req.body.image,
        countComments: req.body.countComments,
        countLikes: req.body.countLikes,
        countRetweets: req.body.countRetweets,
        isLiked: req.body.isLiked
    })
    newPost.save((err) => {
        if (err) {
            res.send(err)
        } else {
            res.send(req.body)
        }
    })
})

export default router
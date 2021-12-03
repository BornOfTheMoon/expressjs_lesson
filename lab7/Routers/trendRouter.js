import express from 'express';
import { Trends } from "../Models/trendsModel.js";

// const urlencodedParser = express.urlencoded({extended: false});

//TODO: Роут для актуального
const router = express.Router();

//TODO: Написать запрос на получение списка актуального
router.get('/', (req, res) => {
    Trends.find({}, (err, post) => {
        if (err) {
            res.send('Posts not found')
        } else {
            res.send(post)
        }
    })
});

// router.post('/', urlencodedParser, (req, res) => {
//     const newPost = new Trends({
//         id: req.body.id,
//         avatar: req.body.avatar,
//         displayName: req.body.displayName,
//         verified: req.body.verified,
//         username: req.body.username,
//         timeLeft: req.body.timeLeft,
//         text: req.body.text,
//         image: req.body.image,
//         countComments: req.body.countComments,
//         countLikes: req.body.countLikes,
//         countRetweets: req.body.countRetweets,
//         isLiked: req.body.isLiked
//     })
//     newPost.save((err) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.send(req.body)
//         }
//     })
// })

export default router
import express from 'express';
import {Users} from "../Models/usersModel.js";

// const urlencodedParser = express.urlencoded({extended: false});

const router = express.Router();

//TODO: Написать запрос на получение всех пользователей
router.get('/', (req, res) => {
    Users.find({}, (err, users) => {
        if (err) {
            res.send('User not found')
        } else {
            res.send(users)
        }
    })
});

//TODO: Возращать данные из какого-нибудь статичного JSON файла или простого JS объекта по ID пользователя и выводить на экран его никнейм.
router.get('/:id', (req, res) => {
    Users.findOne({id: req.params.id}, (err, user) => {
        if (err) {
            res.send('User not found')
        } else {
            res.send(user)
        }
    })
})

// router.post('/', urlencodedParser, (req, res) => {
//     const newUser = new Users({
//         id: req.body.id,
//         name: req.body.name
//     })
//     newUser.save((err) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.send(req.body)
//         }
//     })
// })

export default router
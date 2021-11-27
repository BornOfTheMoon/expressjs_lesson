import express from 'express';
import fs from 'fs';

const router = express.Router();

//TODO: Написать запрос на получение всех пользователей
router.get('/', (req, res) => {
    const data = fs.readFileSync('Data/users.json', 'utf8');
    const users = JSON.parse(data);
    res.send(users);
});

//TODO: Возращать данные из какого-нибудь статичного JSON файла или простого JS объекта по ID пользователя и выводить на экран его никнейм.
router.get('/:id', (req, res) => {
    const data = fs.readFileSync('Data/users.json', 'utf8');
    const users = JSON.parse(data).filter((value) => value.id === req.params.id);
    res.send('User id = ' + users[0].id);
    // res.send('User id = ' + req.params.id);
})

export default router
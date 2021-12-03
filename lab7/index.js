import express from 'express';
import mongoose from 'mongoose';
import { Comments } from "./Models/commentsModel.js";
import homeRouter from "./Routers/homeRouter.js";
import userRouter from './Routers/userRouter.js'
import postRouter from "./Routers/postRouter.js";
import trendRouter from "./Routers/trendRouter.js";
import searchRouter from "./Routers/searchRouter.js";

const app = express();
app.use(express.json());
const urlencodedParser = express.urlencoded({extended: false});

const port = '8000';

//TODO: Заменить ссылку на свою
//'mongodb+srv://ЛОГИН:ПАРОЛЬ@АДРЕСС_МОНГОДБ.NET/НАЗВАНИЕ_БАЗЫ?retryWrites=true&w=majority'
const url = 'mongodb+srv://ЛОГИН:ПАРОЛЬ@АДРЕСС_МОНГОДБ.NET/НАЗВАНИЕ_БАЗЫ?retryWrites=true&w=majority'

mongoose.connect(url, () => console.log('Mongo   connected'))

//TODO: Пример простейшего запроса к монго
app.get('/comment/:name', (req, res) => {
    Comments.findOne({name: req.params.name}, (err, comment) => {
        if (err) {
            res.send('Comment not found')
        } else {
            res.send(comment)
        }
    })
})

app.post('/add_comment', urlencodedParser, (req, res) => {
    const newComment = new Comments({
        name: req.body.name,
        email: req.body.email,
        text: req.body.text,
        movie_id: '573a1390f29313caabcd446f',
        date: new Date(),
    })
    newComment.save((err) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Successful!")
        }
    })
})

app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/trend', trendRouter);
app.use('/search', searchRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
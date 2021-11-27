import express from 'express';
import userRouter from './Routers/userRouter.js'
import postRouter from "./Routers/postRouter.js";
import trendRouter from "./Routers/trendRouter.js";
import searchRouter from "./Routers/searchRouter.js";
import homeRouter from "./Routers/homeRouter.js";

const app = express();
app.use(express.json());

const port = '8000';

app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/trend', trendRouter);
app.use('/search', searchRouter);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
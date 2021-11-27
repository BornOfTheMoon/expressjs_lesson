import express from 'express';

const app = express();
app.use(express.json());

const urlencodedParser = express.urlencoded({extended: false});

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post('/', urlencodedParser, (req, res) => {
    const name = req.body.name;
    const responseMessage = "Hello " + name + "!"
    res.send(responseMessage)
})


export default router
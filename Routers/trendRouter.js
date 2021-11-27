import express from 'express';
import fs from 'fs';

//TODO: Роут для актуального
const router = express.Router();

//TODO: Написать запрос на получение списка актуального
router.get('/', (req, res) => {
    const data = fs.readFileSync('Data/trends.json', 'utf8');
    const trends = JSON.parse(data);
    res.send(trends);
});

export default router
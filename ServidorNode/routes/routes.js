import express from 'express';


export const router = express.Router();

router.get('/', function (req, res) {
    res.send('Esta es la raiz ☀️')
})

router.get('/login', function (req, res) {
    res.send('Esta es el login ☀️')
})

router.get('/add', function (req, res) {
    res.send('Añades.. ? ☀️')
})

router.get('/delete', function (req, res) {
    res.send('Borras ☀️')
})

export default router;
import express from "express"
import cors from "cors"
import {router} from './routes/routes.js'

console.log("Roar - ᓚᘏᗢ")

const app = express();
app.use(cors);
app.use(express.json());
app.use(router);

router.get('/', function (req, res) {
    res.send('Esta es la raiz ☀️')
})


app.listen(5000, () =>{ 
    console.log("Servidor Corriendo correctamente en puerto 5000")   
})

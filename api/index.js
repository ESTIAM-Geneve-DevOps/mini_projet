import express from "express";
import { terminal_input } from "../app/script/terminal_input";

const app = express();
const port = 3000;

app.use( express.json() )

app.get('/', (req, res) => {
    console.log(terminal_input(req.body));
});

app.listen(port, () =>{
    console.log("serveur demarre avec succes sur le port 3000");
})

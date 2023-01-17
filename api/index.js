import {terminal_input} from "app/script/terminal_input.json"

const express = require('express');
const app = express();
const PORT = 3000;

app.use( express.json() )

app.get('/premier/ ', (req, res) => {
    terminal_input(req);
    res.send ({
        "Valeur envoyéé avec succes"
    })
});


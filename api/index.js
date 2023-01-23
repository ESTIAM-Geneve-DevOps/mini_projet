import { terminal_input } from "/app/script/terminal_input.js";

const express = require('express');
const app = express();
const PORT = 3000;

app.use( express.json() )

app.get('/', (req, res) => {
    console.log(terminal_input(req));
    res.send ({

    });
});


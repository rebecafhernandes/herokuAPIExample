import express from "express"

const app = express()
app.get('/', (req, res) => res.send('Hello Geekhunter!'));
app.listen(process.env.PORT || 3000);
import express, { Express, Request, Response } from 'express';
import * as mongoose from 'mongoose'
import dotenv from 'dotenv';
import user from './controller/User'
const bodyParser = require("body-parser");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const mongoUrl = process.env.MongoDB_URL ?? ''

mongoose.connect(mongoUrl)
.then(result => console.log('db connected'))
.catch(err => console.log(err))

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(express.json())

app.use('/user', user)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
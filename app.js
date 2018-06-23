'use strict';
// call the required libraries
import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
require('dotenv').config();

const app = express();
const Console = console;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.listen(3000, () => {
	Console.log('The system is run on port 3000');
});

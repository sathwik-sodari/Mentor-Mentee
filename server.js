import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routers/userRouter.js';
import dotenv from 'dotenv';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const express = require('express')
// const mongoose = require('mongoose')
// const userRouter = require('./Routers/userRouter.js')
// const dotenv = require('dotenv')

dotenv.config();

// const path = require('path')
// const exp = require('express')
const app = express();
// const exp = require('express')
// const exp1 = exp()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'./dist/cfg/')))

mongoose.connect('mongodb://localhost/cfgdemo76', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serving at port ${port}`);
});
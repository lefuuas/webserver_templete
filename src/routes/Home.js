import express from 'express';
import * as Home from '../controllers/home.js';
import { renderHomePage } from '../views/homepage.js';

const rotas = express.Router();

rotas
    .route('/home')
    .get(Home.Homeget);

rotas
    .route('/render')
    .get(renderHomePage);

export default rotas;


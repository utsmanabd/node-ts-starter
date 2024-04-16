import express from 'express';
import { masterRouter } from './master/master.routes';
import path from 'path';

export const mainRouter = express.Router();

mainRouter.get('/not-found', function(req, res) {
    res.status(404).sendFile(path.join(__dirname, '../views/not-found.html'));
});

mainRouter.use('/master/', masterRouter)



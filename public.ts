import express, { Request, Response } from 'express'
import expressListEndpoints from 'express-list-endpoints';
import {app} from './app';


    export const publicRouter = express.Router();

    publicRouter.get('/', (req: Request, res: Response) => {
        const endpoints = expressListEndpoints(app);
        res.json({name: 'Hotel Miranda', endpoints: endpoints})
    })

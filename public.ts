import express, { Request, Response } from 'express'
import expressListEndpoints from 'express-list-endpoints';

export const showEndpoints = (app: express.Express) => {
    const publicRouter = express.Router();

    publicRouter.get('/', (req: Request, res: Response) => {
        const endpoints = expressListEndpoints(app);
        const data = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Public</title>
        </head>
        <body>
            <h1>MIRANDA HOTEL</h1>
            <ul>
                ${endpoints.map((endpoint: any) => `<li>${endpoint.path} : ${endpoint.methods.join(', ')}</li>`).join('')}
            </ul>
        </body>
        </html>
            `
        res.send(data)
    })
    return publicRouter;
}

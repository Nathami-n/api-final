import { Express, Request, Response } from "express";
import { createUserHandler } from "./controllers/user-controller";
import validatePayload from './middleware/validatePayload';
import { createUserSchema } from "./schema/user-schema";
function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
    
    app.post('/api/users', validatePayload(createUserSchema),  createUserHandler);
}


export default routes;
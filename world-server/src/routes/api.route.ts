import { Router } from 'express';
import { check } from 'express-validator';
import { ApiController } from '../controllers/api.controller';

export class ApiRouter {
    public router: Router;
    public apiController: ApiController;

    constructor() {
        this.apiController = new ApiController();
        this.router = Router();
        this.router.get('/getcontinents', 
                        this.apiController.getcontinents.bind(this.apiController));
        this.router.post('/getcountries', 
                        [check('continent-code', 'No continent code was provided').exists()],
                        this.apiController.getcountries.bind(this.apiController));
    }
}
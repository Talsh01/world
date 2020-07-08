import { Request, Response } from 'express';
import { ApiService } from '../services/api.service';
import { validationResult } from 'express-validator';
import HttpStatusCodes from 'http-status-codes';

export class ApiController {

    public apiService: ApiService;

    constructor() {
        this.apiService = new ApiService();
    }
    
    public async getcontinents(req: Request, res: Response) {
        const continents = await this.apiService.getcontinents();
        res.status(200).json(continents);
    }

    public async getcountries(req: Request, res: Response) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ errors: errors.array() });
        }

        const countries = await this.apiService.getcountries(req.body[`continent-code`]);
        res.status(200).json(countries);
    }
}
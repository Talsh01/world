import { request } from 'graphql-request'
import * as queries from './queries/index';
import config from 'config';

const ENDPOINT: string = config.get("dataEndpoint");

export class ApiService {

    public async getcontinents() {
        try {
            const data: any = await request(ENDPOINT, queries.continentsQuery);
            return data.continents;
        } catch (e) {
            return { errors: e.message };
        }
    }

    public async getcountries(continentCode: string) {
        try {
            const variables = { code: continentCode };
            const data: any = await request(ENDPOINT, queries.countriesQuery, variables);
            return data.countries;
        } catch (e) {
            return { errors: e.message };
        }
    }
}

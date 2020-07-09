import redis from 'redis';
import config from 'config';
import { ApiService } from './api.service';

const PORT: string = config.get("redisPort");
const HOST: string = config.get("redisHost");
const INTERVAL: string = config.get("intervalForDataFetch");

export class RedisService {

    private apiService: ApiService;
    private redisClient: redis.RedisClient;

    constructor() {
        this.apiService = new ApiService();
        this.redisClient = redis.createClient({port: +PORT, host: HOST});
        this.redisClient.on('connect', () => {
            // Fetch data and save to redis
            this.saveContinents();

            // Keep updating data
            setInterval(this.saveContinents.bind(this), +INTERVAL);
        }).on("error", (e) => {
            console.log('error', e);
        });
    }

    private async saveContinents() {
        // Fetch data from repository
        let continents = await this.apiService.getcontinentsFromRepository();

        if (continents.errors) {
            console.log(`${continents.errors}; Cached data available only.`);
        } else {
            for (let continent of continents) {
                // Save to redis
                let continentKey = `continent:${continent.code}`;
                this.redisClient.hmset(`${continentKey}`,
                `code`, `${continent.code}`,  
                `name`, `${continent.name}`
                );
                
                this.saveCountries(continent.code);
            }
        }
    }

    private async saveCountries(continentCode: string) {
        // Fetch data from repository
        const countries = await this.apiService.getCountriesFromRepository(continentCode);

        if (countries.errors) {
            console.log(`${countries.errors}; Cached data available only.`);
        } else {
            for (let country of countries) {
                // Save to redis
                let languages = (country.languages as Array<any>).map(x => x.name).join(', ');
                let countryKey = `country:${continentCode}:${country.code}`;
                this.redisClient.hmset(`${countryKey}`,
                `code`, `${country.code}`,  
                `name`, `${country.name}`,
                `phone`, `${country.phone}`,  
                `capital`, `${country.capital}`,
                `currency`, `${country.currency}`,  
                `languages`, `${languages}`,
                );
            }
        }
    }

    public async getContinentsFromCache() {
        let redisClient = this.redisClient;
        return new Promise(function(resolve, reject) {
            let continentsList: Array<any> = [];

            redisClient.keys("continent:*", (err, keys) => {
                for (let continent of keys) {
                    redisClient.HGETALL(continent, (err, results) => {
                        continentsList.push(results);

                        if (continentsList.length === keys.length) {
                            resolve(continentsList);
                        }
                    });
                }
            });
        })
    }

    public async getCountriesFromCache(continentCode: string) {
        let redisClient = this.redisClient;
        return new Promise(function(resolve, reject) {
            let countries: Array<any> = [];

            redisClient.keys(`country:${continentCode}:*`, (err, keys) => {
                for (let country of keys) {
                    redisClient.HGETALL(country, (err, results) => {
                        countries.push(results);

                        if (countries.length === keys.length) {
                            resolve(countries);
                        }
                    });
                }
            });
        })
    }
}
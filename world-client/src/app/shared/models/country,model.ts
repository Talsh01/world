export class Country {
    code: string
    name: string
    phone: string
    capital: string
    currency: string
    languages: Array<Language>
}

export class Language {
    name: string
}
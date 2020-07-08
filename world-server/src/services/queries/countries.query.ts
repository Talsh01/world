export const countriesQuery = `query countries($code: String!) {
    countries(filter: { continent: { eq: $code } }) {
        code,
        name,
        phone,
        capital,
        currency,
        languages{
          name
        }
    }
}`;
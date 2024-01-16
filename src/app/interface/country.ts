import { CountryStats } from "./countryStats"

export interface Country {
    name: String,
    area: Number,
    countryCode3: String
    countryStats: CountryStats
}
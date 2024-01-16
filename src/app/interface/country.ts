import { CountryStats } from "./countryStats"

export interface Country {
    id: Number,
    name: String,
    area: Number,
    countryCode3: String
    countryCode2: String
    countryStats: CountryStats
}
import {Geometry} from "./Geometry";


export interface Place {
    geometry: Geometry
    icon: string
    id: string
    name: string
    opening_hours: object
    photos: Array<object>
    place_id: string
    rating: number
    types: Array<string>
    user_ratings_total: bigint
    vicinity: string
}

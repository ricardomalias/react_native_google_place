
import {apiRequest} from "../api";

import {
    SET_MAP_PLACES,
    FETCH_MAP_PLACES
} from './types';
import {Location} from "../../models/Location";
import {ResourceData} from "../../models/ResourceData";

export function getNearbyPlaces(location: Location, keyword: string = "") {
    return apiRequest({
        url: `place/nearbysearch/json?keyword=${keyword}&location=${location.latitude},${location.longitude}&radius=1500`,
        method: "GET",
        onSuccess: (data: ResourceData) => {
            return {
                type: SET_MAP_PLACES,
                payload: data
            }
        },
        onFailure: (e) => {

        },
        label: FETCH_MAP_PLACES,
    });
}


import {
    API_START,
    API_END,
} from "../api"

import {
    SET_MAP_PLACES,
    FETCH_MAP_PLACES
} from "./types";

export default function(state = {}, action: any) {
    switch (action.type) {
        case SET_MAP_PLACES:
            return {
                places: action.payload.results
            }
        case API_START:
            if (action.payload === FETCH_MAP_PLACES) {
                return {
                    ...state,
                    isLoadingData: true
                };
            }
            return state
        case API_END:
            if (action.payload === FETCH_MAP_PLACES) {
                return {
                    ...state,
                    isLoadingData: false
                };
            }
            return state
        default:
            return state;
    }
}

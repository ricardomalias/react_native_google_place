
import {User} from "../../models/User";
import {apiRequest} from "../api";

import {
    SET_MAP_PLACES,
    FETCH_MAP_PLACES
} from './types';

export function getUserMe() {
    return apiRequest({
        url: "/map/me/",
        method: "GET",
        onSuccess: (data: User) => {
            return {
                type: SET_MAP_PLACES,
                payload: data
            }
        },
        onFailure: (e) => {
            console.log("Error occured loading goals")
        },
        label: FETCH_MAP_PLACES,
    });
}

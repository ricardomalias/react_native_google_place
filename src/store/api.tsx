// import { API_START, API_END, ACCESS_DENIED, API_ERROR } from "./main/types";

export const API = "API";
export const API_START = "API_START";
export const API_END = "API_END";
export const ACCESS_DENIED = "ACCESS_DENIED";
export const API_ERROR = "API_ERROR";

export const apiStart = (label: any) => ({
    type: API_START,
    payload: label
});

export const apiEnd = (label: any) => ({
    type: API_END,
    payload: label
});

export const accessDenied = (url: any) => ({
    type: ACCESS_DENIED,
    payload: {
        url
    }
});

export const apiError = (error: any) => ({
    type: API_ERROR,
    error
});

export function apiRequest({
        url = "",
        method = "GET",
        data = null,
        onSuccess = (data: any) => {},
        onFailure = (data: any) => {},
        label = "",
        headersOverride = null
    }) {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            onSuccess,
            onFailure,
            label,
            headersOverride
        }
    };
}

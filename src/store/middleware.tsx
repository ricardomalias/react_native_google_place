import axios from "axios";
import { accessDenied, apiError, apiStart, apiEnd, API } from "./api";
import settings from "../settings/";
import NavigationService from "../route/NavigationService"

const apiMiddleware =  ({ dispatch }: any) => (next: any) => async (action: any) => {
    next(action);

    let accessToken = "";

    if (action.type !== API) return;

    let {
        url,
        method,
        data,
        onSuccess,
        onFailure,
        label,
        headers
    } = action.payload;

    const dataOrParams = ["GET", "DELETE"].indexOf(method) >= 0  ? "params" : "data";

    // axios default configs
    axios.defaults.baseURL = settings.api_service;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] = accessToken;

    let services = Object.keys(settings).filter(item => url.includes(item));

    if(services.length === 1) {
        let service = services[0];

        // @ts-ignore
        url = url.replace(service, settings[service])
    } else {
        url = settings.api_service + url
    }

    if (label) {
        dispatch(apiStart(label));
    }

    axios
        .request({
            url,
            method,
            headers: headers,
            [dataOrParams]: data
        })
        .then((payload) => {
            let data = payload.data;

            dispatch(onSuccess(data));
        })
        .catch(error => {
            // console.log('middlewarte error', error)
            // dispatch(apiError(error))
            // dispatch(onFailure(error))

            if (error.response && error.response.status === 403) {
                dispatch(accessDenied(window.location.pathname));
            }

        })
        .finally(() => {
            if (label) {
                dispatch(apiEnd(label));
            }
        });
};

export default apiMiddleware;

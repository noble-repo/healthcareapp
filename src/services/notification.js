import {httpConstants} from "../constants";
import {httpService} from "../utility/httpService";

export default{
    addNotification,
    getNotification,
    markNotificationRead,
}

function getHeaders() {
    return {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON, 'skip': true}
}

async function addNotification(requestData){
    let url = process.env.REACT_APP_NOTIFICATION_SERVICE_URL + httpConstants.API_END_POINT.ADD_NOTIFICATION;

    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
        .then(
            response => {
                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject(response);
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });

}

async function getNotification(requestData){
    
    let url = process.env.REACT_APP_NOTIFICATION_SERVICE_URL + httpConstants.API_END_POINT.GET_NOTIFICATION;

    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
        .then(
            response => {
                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject(response);
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });

}

async function markNotificationRead(requestData){

    let url = process.env.REACT_APP_NOTIFICATION_SERVICE_URL + httpConstants.API_END_POINT.MARK_NOTIFICATION_READ;

    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
    .then(
        response => {
            if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                return Promise.reject(response);
            return Promise.resolve(response.responseData);
        }
    ).catch(function (err) {
        return Promise.reject(err);
    });
}
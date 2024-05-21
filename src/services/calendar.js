import { httpConstants } from "../constants";
import { httpService } from "../utility/httpService";

export default {
    addSchedules,
    getSchedules,
    getEventsList,
    createEvent,
    getEventById,
    updateEvent
}


function getHeaders() {
    return { 'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON, 'skip': true }
}

function getUrl(path) {
    return process.env.REACT_APP_CALENDAR_SERVICE_URL + path
    // return "http://localhost:3006" + path
}

async function addSchedules(requestData) {
    let url = getUrl(httpConstants.API_END_POINT.ADD_SCHEDULES);

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
};

async function getSchedules(requestData) {
    let url = getUrl(`${httpConstants.API_END_POINT.GET_SCHEDULES}/${requestData.userId}/${requestData.month}/${requestData.year}`);

    return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), requestData, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject(response);
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
};

async function getEventsList(requestData) {
    let url = getUrl(`${httpConstants.API_END_POINT.GET_EVENT_LIST}/${requestData.userId}/${requestData.startTime}/${requestData.endTime}`);

    return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), requestData, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject(response);
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
};



async function createEvent(requestData) {
    let url = getUrl(httpConstants.API_END_POINT.CREATE_EVENT);

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
};



async function updateEvent(requestData) {
    let url = getUrl(httpConstants.API_END_POINT.CREATE_EVENT);

    return httpService(httpConstants.METHOD_TYPE.PUT, getHeaders(), requestData, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject(response);
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
};



async function getEventById(requestData) {
    let url = getUrl(`${httpConstants.API_END_POINT.CREATE_EVENT}/${requestData.eventId}`);

    return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), requestData, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject(response);
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
};
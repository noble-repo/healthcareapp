import {httpConstants} from "../constants";
import {httpService} from "../utility/httpService";

export default {
    createClinic,
    getClinicById,
    getClinicList,
    updateClinic
}


function getHeaders() {
    return {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON, 'skip': true}
}

async function getClinicList(requestData) {
    let url = process.env.REACT_APP_CLINIC_SERVICE_URL + httpConstants.API_END_POINT.CLINIC_LIST;

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

async function createClinic(requestData) {
    let url = process.env.REACT_APP_CLINIC_SERVICE_URL + httpConstants.API_END_POINT.CREATE_CLINIC;

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

async function updateClinic(requestData) {
    let url = process.env.REACT_APP_CLINIC_SERVICE_URL + httpConstants.API_END_POINT.CREATE_CLINIC;

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

async function getClinicById(requestData) {
    let url = process.env.REACT_APP_CLINIC_SERVICE_URL + httpConstants.API_END_POINT.CREATE_CLINIC + '/' + requestData.clinicId;

    return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), {}, url)
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
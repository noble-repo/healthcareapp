import {httpConstants} from "../constants";
import {httpService} from "../utility/httpService";

export default {
    getUserDetails,
    forgotPassword,
    resetPassword,
    verifyEmailAndSendOtp,
    verifyOtp,
    updateUser,
    searchUser,
    getUserList,
    addUser,
    // getSurgeonList,
}


function getHeaders() {
    return {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON, 'skip': true}
}

async function searchUser(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_URL + httpConstants.API_END_POINT.SEARCH;
    // let url = 'http://localhost:3001' + httpConstants.API_END_POINT.SEARCH;
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

// async function getSurgeonList(requestData) {
//     let url = process.env.REACT_APP_USER_SERVICE_URL + httpConstants.API_END_POINT.GET_SURGEON_LIST;
//     // let url = 'http://localhost:3001' + httpConstants.API_END_POINT.GET_USER_LIST;
//     return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
//         .then(
//             response => {
//                 if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
//                     return Promise.reject(response);
//                 return Promise.resolve(response.responseData);
//             }
//         ).catch(function (err) {
//             return Promise.reject(err);
//         });
// };


async function getUserList(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_URL + httpConstants.API_END_POINT.GET_USER_LIST;
    // let url = 'http://localhost:3001' + httpConstants.API_END_POINT.GET_USER_LIST;
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

async function getUserDetails(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_URL + httpConstants.API_END_POINT.USER + '/' + requestData.userId;
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

async function verifyEmailAndSendOtp(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_URL + httpConstants.API_END_POINT.VERIFY_EMAIL_AND_SEND_OTP;
    // let url = 'http://localhost:3001' + httpConstants.API_END_POINT.VERIFY_EMAIL_AND_SEND_OTP;
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

async function verifyOtp(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_URL + httpConstants.API_END_POINT.VERIFY_OTP;
    // let url = 'http://localhost:3001' + httpConstants.API_END_POINT.VERIFY_OTP;
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

async function forgotPassword(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_URL + httpConstants.API_END_POINT.FORGOT_PASSWORD;
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

async function resetPassword(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_URL + httpConstants.API_END_POINT.RESET_PASSWORD;
    // let url = 'http://localhost:3001' + httpConstants.API_END_POINT.RESET_PASSWORD;
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

async function updateUser(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_URL + httpConstants.API_END_POINT.UPDATE_USER;
    // let url = 'http://localhost:3001' + httpConstants.API_END_POINT.UPDATE_USER;
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

async function addUser(requestData) {
    let url = process.env.REACT_APP_USER_SERVICE_URL + httpConstants.API_END_POINT.ADD_USER;
    // let url = 'http://localhost:3001' + httpConstants.API_END_POINT.VERIFY_EMAIL_AND_SEND_OTP;
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
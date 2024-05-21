import { httpConstants } from "../constants";
import { httpService } from "../utility/httpService";

export default {
    createSurgery,
    updateSurgery,
    getSurgeryDetails,
    getSectionListBySurveyId,
    getSectionListByPartWise,
    getSectionQuestionList,
    getSurveyDetailByUserId,
    getSurveyDetailBySurveyId,
    submitAnswer,
    getSurgeryList,
    getSectionWiseQuestionList,
    createSurgeryClearanceDocument,
    updateSurgeryClearanceDocument,
    deleteSurgeryClearanceDocument,
    getSurgeryClearanceDocumentList,
    getQuestionDetail,
    updateSurgeryStatus,
    getSurgery,
    updateSurgeryAirWayEvaluation,
    getSurgeryAirWayEvaluationBySurgeryId,
}


function getHeaders() {
    return { 'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON, 'skip': true }
}

async function createSurgery(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SURGERY;
    // let url = 'http://localhost:3005' + httpConstants.API_END_POINT.SURGERY;

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

async function getSurgeryList(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SURGERY_LIST;

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

async function getSurgery(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.GET_SURGERY;
    // let url = "http://localhost:3005" + httpConstants.API_END_POINT.GET_SURGERY;

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

async function updateSurgery(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SURGERY;
    // let url = "http://localhost:3005" + httpConstants.API_END_POINT.SURGERY;

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

async function getSurgeryDetails(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SURGERY + '/' + requestData.surgeryId;
    // let url = 'http://localhost:3005' + httpConstants.API_END_POINT.SURGERY + '/' + requestData.surgeryId;

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


async function getSurveyDetailByUserId(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SURVEY_BY_USER + '/' + requestData.userId;

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

async function getSurveyDetailBySurveyId(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SURVEY + '/' + requestData.surveyId;

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

async function getSectionListBySurveyId(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SECTION_LIST + '/' + requestData.surveyId;

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

async function getSectionListByPartWise(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SECTION_LIST_USING_PART + '/' + requestData.surveyId + '/' + requestData.part;

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

async function getSectionQuestionList(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SECTION_QUESTION_LIST + '/' + requestData.surveyId + '/' + requestData.sectionId;

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

async function submitAnswer(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.QUESTION_ANSWER;

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


async function getSectionWiseQuestionList(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SECTION_WISE_QUESTION_LIST;
    // let url = 'http://localhost:3005' + httpConstants.API_END_POINT.SECTION_WISE_QUESTION_LIST;
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

async function createSurgeryClearanceDocument(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SURGERY_DOCUMENT;
    // let url = 'http://localhost:3005' + httpConstants.API_END_POINT.SURGERY_DOCUMENT;
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

async function updateSurgeryClearanceDocument(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SURGERY_DOCUMENT;
    // let url = 'http://localhost:3005' + httpConstants.API_END_POINT.SURGERY_DOCUMENT;
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

async function deleteSurgeryClearanceDocument(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SURGERY_DOCUMENT;
    // let url = 'http://localhost:3005' + httpConstants.API_END_POINT.SURGERY_DOCUMENT;
    return httpService(httpConstants.METHOD_TYPE.DELETE, getHeaders(), requestData, url)
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

async function getSurgeryClearanceDocumentList(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SURGERY_DOCUMENT + '/' + requestData.surgeryId;
    // let url = 'http://localhost:3005' + httpConstants.API_END_POINT.SURGERY_DOCUMENT + '/' + requestData.surgeryId;
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
async function getQuestionDetail(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.QUESTION + '/' + requestData.surveyId + '/' + requestData.sectionId + '/' + requestData.questionId;
    // let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.QUESTION + '/'+ requestData.surveyId + '/'+ requestData.sectionId + '/'+ requestData.questionId;
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


async function updateSurgeryStatus(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.UPDATE_SURGERY_STATUS;
    // let url = 'http://localhost:3005' + httpConstants.API_END_POINT.UPDATE_SURGERY_STATUS;

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


async function getSurgeryAirWayEvaluationBySurgeryId(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SURGERY_AIRWAY_EVALUATION + '/' + requestData.surgeryId;
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
async function updateSurgeryAirWayEvaluation(requestData) {
    let url = process.env.REACT_APP_PATIENT_SERVICE_URL + httpConstants.API_END_POINT.SURGERY_AIRWAY_EVALUATION;
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

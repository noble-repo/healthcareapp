/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */

export const httpConstants = {
    METHOD_TYPE: {
        POST: "POST",
        PUT: "PUT",
        GET: "GET",
        DELETE: "DELETE",
    },
    CONTENT_TYPE: {
        APPLICATION_JSON: "application/json",
        MULTIPART_FORM_DATA: "multipart/form-data",
        APPLICATION_FORM_URLENCODED: "application/x-www-form-urlencoded",
        IMAGE_PNG: "image/png",
    },
    DEVICE_TYPE: {
        WEB: "web",
    },

    API_END_POINT: {
        SURVEY: '/survey',
        SURGERY: '/surgery',
        SURGERY_LIST: '/surgery-list',
        GET_SURGERY: '/get-surgery',
        SURVEY_BY_USER: '/survey-by-user',
        SEARCH: '/search',
        GET_USER_LIST: '/get-user-list',
        GET_SURGEON_LIST: '/get-surgeon-list',
        SECTION_LIST: '/section-list',
        SECTION_LIST_USING_PART: '/section-list-using-part',
        SECTION_QUESTION_LIST: '/section-question-list',
        SECTION_WISE_QUESTION_LIST: '/section-wise-question-list',
        SURGERY_DOCUMENT: '/surgery-document',
        QUESTION: '/question',
        SURGERY_AIRWAY_EVALUATION: '/surgery-airway-evaluation',
        QUESTION_ANSWER: '/question-answer',
        CREATE_CLINIC: '/clinic',
        CLINIC_LIST: '/clinic-list',
        USER: '/user',
        VERIFY_EMAIL_AND_SEND_OTP: '/verify-email/send-otp',
        VERIFY_OTP: '/verify-otp',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/change-password',
        UPDATE_USER: '/update-user',
        ADD_PATIENT: '/add-patient',
        ADD_SURGERY: '/add-surgery',
        ADD_USER: '/sign-up',
        UPDATE_SURGERY_STATUS: '/update-surgery-status',

        ADD_SCHEDULES: "/add-schedules",
        GET_SCHEDULES: "/get-schedules",
        GET_EVENT_LIST: "/get-events",
        CREATE_EVENT: "/event",

        ADD_NOTIFICATION: "/add-to-notifications",
        GET_NOTIFICATION: "/notification-list",
        MARK_NOTIFICATION_READ: "/mark-notification-read-queryObj",
    },
};

export const genericConstants = {
    EXPRESSION_TYPE: {
        REGEX: /^[0-9\b]+$/,
    },
    QUESTION_TYPE: {
        DROPDOWN: "DROPDOWN",
        DESCRIPTION: "DESCRIPTION",
        INFO: "INFO",
        DATE_PICKER: "DATE_PICKER",
        UPLOAD: "UPLOAD",
        GROUP_OF_QUESTION: "GROUP_OF_QUESTION",
    },
};

export const Auth0RoleNameConstants = {
    ADMIN: 'admin',
    ANAESTHESIOLOGIST: 'anaesthesiologist',
    PATIENT: 'patient',
    SUB_ANAESTHESIOLOGIST: 'sub-anaesthesiologist',
    SURGEON: 'surgeon',
    SUB_SURGEON: 'sub-surgeon',

}


export const eventConstants = {

    SHOW_LOADER: "SHOW_LOADER",
    HIDE_LOADER: "HIDE_LOADER",
    SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
    UPDATE_USER_DATA_SUCCESS: "UPDATE_USER_DATA_SUCCESS",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
};


export const cookiesConstants = {
    ACCESS_TOKEN: 'accessToken',
    ID_TOKEN: 'idToken',
    EXPIRES_AT: 'expiresAt',
    USER: 'user',
    USER_DETAILS: 'userDetails',
};
export const portalType = {
    PATIENT_PORTAL: 'PATIENT_PORTAL',
    SURGEON_PORTAL: 'SURGEON_PORTAL',
    ANESTHESIOLOGIST_PORTAL: 'ANESTHESIOLOGIST_PORTAL',
    ADMIN_PORTAL: 'ADMIN_PORTAL',
};
export const sectionIdsConstants = {
    PART_A_SECTION_3: '606409aa633ac20de20a6983',
    PART_B_SECTION_2: '60640b52ac5eab0e0904ad67',
    PART_A_SECTION_2: '604f631cc53d0210e00f53e0',
};
export const patientInfoQuestionIdsConstants = {
    height: '604f63f5c53d0210e00f53e1',
    weight: '604f6458c53d0210e00f53e7',
    gender: '604f64dac53d0210e00f53ea',
    dob: '604f655ec53d0210e00f53ed',
    education: '604f7963f472462e3db9f024',
    firstTimeSurgery: '604f7c1df472462e3db9f032',
    allergyToMedication: '604f7c68f472462e3db9f035',
    ifYesAllergyToMedication: '6050415686db8004cd580e9d',
};
export const statusConstants = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    COMPLETED: 'COMPLETED',
    ACCEPTED: 'ACCEPTED',
    'IN-PROGRESS': 'IN-PROGRESS',
    SCHEDULED: "SCHEDULED"
};

export const schedules =
    [
        {
            day: "Monday",
            schedules: []
        },
        {
            day: "Tuesday",
            schedules: []
        },
        {
            day: "Wednesday",
            schedules: []
        },
        {
            day: "Thursday",
            schedules: []
        },
        {
            day: "Friday",
            schedules: []
        },
        {
            day: "Saturday",
            schedules: []
        },
        {
            day: "Sunday",
            schedules: []
        }
    ]


export const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


export const roleConstants = {
    PATIENT: "PATIENT",
    ANATHESIOLOGIST: "ANATHESIOLOGIST",
    SURGEON: "SURGEON"
}


export const Slots = [{
    value: "15", key: "15 min"
}, {
    value: "30", key: "30 min"
}, {
    value: "45", key: "45 min"
}, {
    value: "60", key: "60 min"
}]

export const documentActionTypeConstants = {
    FILE_UPLOAD: 'FILE_UPLOAD',
    PROVIDE_INFORMATION: 'PROVIDE_INFORMATION',
};

import {cookiesConstants, eventConstants} from "../constants";
import {sessionManager} from "../managers/sessionManager";

const userData = sessionManager.getDataFromCookies(cookiesConstants.USER);
const accessToken = sessionManager.getDataFromCookies(cookiesConstants.ACCESS_TOKEN);
const idToken = sessionManager.getDataFromCookies(cookiesConstants.ID_TOKEN);
const expiresAt = sessionManager.getDataFromCookies(cookiesConstants.EXPIRES_AT);
let initialState = {
    userDetails: userData,
    accessToken: accessToken,
    idToken: idToken,
    expiresAt: expiresAt,
    isLoggedIn: false,
    loading: false,
};
export default function user(state = initialState, action) {
    switch (action.type) {
        case eventConstants.SHOW_LOADER:
            return {
                ...state,
                loading: true
            };
        case eventConstants.HIDE_LOADER:
            return {
                ...state,
                loading: false
            };
        case eventConstants.SIGN_UP_SUCCESS:
            sessionManager.setDataInCookies(action.data ? action.data.userDetails : state.userDetails, cookiesConstants.USER);
            sessionManager.setDataInCookies(action.data ? action.data.accessToken : state.accessToken, cookiesConstants.ACCESS_TOKEN);
            sessionManager.setDataInCookies(action.data ? action.data.idToken : state.idToken, cookiesConstants.ID_TOKEN);
            sessionManager.setDataInCookies(action.data ? (action.data.expiresIn * 1000) + new Date().getTime() : state.expiresAt, cookiesConstants.EXPIRES_AT);
            return {
                ...state,
                userDetails: action.data ? action.data.userDetails : state.userDetails,
                accessToken: action.data ? action.data.accessToken : state.accessToken,
                idToken: action.data ? action.data.idToken : state.idToken,
                expiresAt: action.data ? (action.data.expiresIn * 1000) + new Date().getTime() : state.expiresAt,
                loading: false,
                isLoggedIn: true
            }
        case eventConstants.UPDATE_USER_DATA_SUCCESS:
            sessionManager.setDataInCookies(action.data ? action.data.userDetails : state.userDetails, cookiesConstants.USER);
              return {
                ...state,
                userDetails: action.data ? action.data.userDetails : state.userDetails,
            }

        case eventConstants.LOGOUT_SUCCESS:
            sessionManager.setDataInCookies(false, cookiesConstants.USER);
            sessionManager.setDataInCookies(false, cookiesConstants.ACCESS_TOKEN);
            sessionManager.setDataInCookies(false, cookiesConstants.ID_TOKEN);
            sessionManager.setDataInCookies(false, cookiesConstants.EXPIRES_AT);
            return {
                ...state,
                userDetails: false,
                accessToken: null,
                idToken: null,
                expiresAt: null,
                userMetadata: null,
                loading: false,
                isLoggedIn: false
            };
        default:
            return state;
    }
}
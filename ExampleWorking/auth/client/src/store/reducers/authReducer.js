import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE
} from '../constants'
const initialState = {
    user: {},
    authUser: {},
    isLoading: false,
    isError: { status: false, msg: '' },
    error: {},
    isLoggedIn: true,
    isAuthenticated: false
}

export default function AuthReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                authUser: {},
                user: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authUser: action.payload,
                isLoading: false,

            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        case SIGNIN:
            return {
                ...state,
                user: {},
                authUser: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,

            }
        case SIGNIN_SUCCESS:
            return {
                ...state,
                // user: action.payload.user,
                authUser: action.payload,
                isLoading: false,
                isLoggedIn: true,
                isAuthenticated: true
            }
        case SIGNIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: { status: true, msg: action.payload},
                error: action.error
            }
        case LOGOUT:
            return {
                ...state,
                isLoading: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                authUser: {},
                user: {},
                isLoading: false,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        default:
            return state
    }
}
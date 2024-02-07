import { ActionSetLanguage, UserProfileActions, ActionSetUserData, UserData, ActionSetPublicAddress } from './actions';

export function actionSetLanguage(language: string): ActionSetLanguage {
    return {
        type: UserProfileActions.SET_LANGUAGE,
        language
    }
}

export function actionSetUserData(userData: UserData): ActionSetUserData {
    return {
        type: UserProfileActions.SET_USER_DATA,
        userData,
    }
}

export function actionSetPublicAddress(publicAddress: string): ActionSetPublicAddress {
    return {
        type: UserProfileActions.SET_PUBLIC_ADDRESS,
        publicAddress,
    }
}
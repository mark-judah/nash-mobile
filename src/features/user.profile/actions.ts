/**
 * User data datatype.
 */
export interface UserData {
    name: string
    email: string
    phone_number: string
}

/**
 * List of actions that can be taken 
 * against the user profile redux state.
 */
export enum UserProfileActions {
    SET_LANGUAGE = 'USER_PROFILE/ACTION_SET_LANGUAGE',
    SET_USER_DATA = 'USER_PROFILE/ACTION_SET_USER_DATA',
    SET_PUBLIC_ADDRESS = 'USER_PROFILE/ACTION_SET_PUBLIC_ADDRESS'

}

export interface ActionSetLanguage {
    type: UserProfileActions.SET_LANGUAGE;
    language: string;
}

export interface ActionSetUserData {
    type: UserProfileActions.SET_USER_DATA;
    userData: UserData;
}

export interface ActionSetPublicAddress {
    type: UserProfileActions.SET_PUBLIC_ADDRESS;
    publicAddress: string;
}



/**
 * Create a generic action type.
 */
export type UserProfileActionTypes =
    | ActionSetLanguage //should be at the beginning of all reducers.
    | ActionSetUserData
    | ActionSetPublicAddress;

import { createAction, } from '@reduxjs/toolkit';


/**
 * User data datatype.
 */
export interface UserData {
    name: string
    email: string
    phoneNumber: string
    publicAddress: string
}

export const ACTION_SET_LANGUAGE = createAction<string>('ACTION_SET_LANGUAGE');
export const ACTION_SET_USER_DATA = createAction<UserData>('ACTION_SET_USER_DATA');
export const ACTION_SET_PUBLIC_ADDRESS = createAction<string>('ACTION_SET_PUBLIC_ADDRESS');

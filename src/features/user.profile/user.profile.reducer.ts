// reducers/userProfileReducer.ts
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { UserData, ACTION_SET_LANGUAGE, ACTION_SET_USER_DATA, ACTION_SET_PUBLIC_ADDRESS } from './onboading.actions';

interface UserProfileState {
    userData: UserData;
    publicAddress: string
    language: string;
    locale: string;
    lastUpdated: number;
}

const initialState: UserProfileState = {
    userData: {
        name: '',
        email: '',
        phoneNumber: '',
        publicAddress: ''
    },
    publicAddress: '',
    language: '',
    locale: '',
    lastUpdated: 0
};

const userProfileReducer = createReducer(initialState, (builder) => {
    builder.addCase(ACTION_SET_LANGUAGE, (state, action: PayloadAction<string>) => {
        state.language = action.payload;
        state.lastUpdated = new Date().getTime();
    });
    builder.addCase(ACTION_SET_USER_DATA, (state, action: PayloadAction<UserData>) => {
        state.userData = action.payload;
        state.lastUpdated = new Date().getTime();
    });
    builder.addCase(ACTION_SET_PUBLIC_ADDRESS, (state, action: PayloadAction<string>) => {
        state.publicAddress = action.payload;
        state.lastUpdated = new Date().getTime();
    });

});

export default userProfileReducer;

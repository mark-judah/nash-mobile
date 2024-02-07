import { UserData, UserProfileActions, UserProfileActionTypes } from './actions';

interface UserProfileState {
    user_data: UserData;
    public_address: string;
    phone_number: string;
    language: string;
    locale: string;
    last_updated: number;
}

const initialState: UserProfileState = {
    user_data: {
        name: '',
        email: '',
        phone_number: '',
    },
    public_address: '',
    language: '',
    locale: '',
    last_updated: 0,
    phone_number: ''
};

export const userProfileReducer = (
    state: UserProfileState | undefined = initialState,
    action: UserProfileActionTypes
): UserProfileState => {
    switch (action.type) {
        case UserProfileActions.SET_LANGUAGE:
            return {
                ...state,
                language: action.language,
                last_updated: new Date().getTime()
            }

        case UserProfileActions.SET_USER_DATA:
            return {
                ...state,
                user_data: action.userData,
                last_updated: new Date().getTime()
            }

        case UserProfileActions.SET_PUBLIC_ADDRESS:
            return {
                ...state,
                public_address: action.publicAddress,
                last_updated: new Date().getTime()
            }

        default:
            return state
    }
}


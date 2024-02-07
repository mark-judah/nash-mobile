import { combineReducers } from "redux";
import { userProfileReducer } from "../features/user.profile/reducer";

export const rootReducer = combineReducers(
    {
        user_profile: userProfileReducer
    }
)
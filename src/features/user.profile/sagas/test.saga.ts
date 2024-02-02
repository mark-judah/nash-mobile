import { takeLatest } from "redux-saga/effects";
import { ActionSetPublicAddress, UserProfileActions } from "../actions";

/**
 * Listens to set language event.
 */
export function* watchSetLanguage() {
    yield takeLatest(UserProfileActions.SET_LANGUAGE, setLanguage)
}

export function* setLanguage(action: ActionSetPublicAddress) {
    console.log(action)
}
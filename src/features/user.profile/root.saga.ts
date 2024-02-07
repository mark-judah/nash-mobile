import { spawn } from "redux-saga/effects";
import { watchSetLanguage } from "./sagas/test.saga";

/**
 * Root saga of the module/feature.
 */
export function* userProfileSagas() {
    yield spawn(watchSetLanguage)
}

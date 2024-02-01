// store.ts
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './sagas';
import userProfileReducer from '../features/user.profile/user.profile.reducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: userProfileReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            // thunk: false,
            serializableCheck: {
                // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

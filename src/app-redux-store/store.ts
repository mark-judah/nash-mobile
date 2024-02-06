// store.ts
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root.reducer';
import { rootSaga } from './root.saga';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';

const sagaMiddleware = createSagaMiddleware();


/**
 * Create redux persist configurations object.
 */
const persistConfig = {
    key: 'root',
    vsrsion: 1,
    keyPrefix: '',
    storage: FilesystemStorage,
    // figure out what best to do with wallet.
    blacklist: ['ui_state', 'wallet_balance', 'ramp'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            // thunk: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(sagaMiddleware),
});

/**
 * Method to run after rehydration.
 */
const postRehydration = () => { };

/**
 * Compose the persister object.
 * @param store instance of redux store.
 * @param config the persister config object.
 * @param callback the method to run after rehydration.
 */
export const persistor = persistStore(store, null, postRehydration);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

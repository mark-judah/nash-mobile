/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store, { persistor } from './src/app-redux-store/store';
import { PersistGate } from 'redux-persist/integration/react';
import RehydrationLoadingScreen from './src/components/RehydrationLoadingScreen';

AppRegistry.registerComponent(appName, () => () => (
    <Provider store={store}>
        <PersistGate loading={<RehydrationLoadingScreen />} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
));

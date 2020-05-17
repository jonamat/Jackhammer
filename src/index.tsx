import React from 'react';
import ReactDOM from 'react-dom';

// Redux & middlewares
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { status, wordList, loadLanguage, loadTheme, loadWordList } from './redux';

// Translation resources
import { initTranslator, Collection, tryUseBrowserLanguage } from 'app-translator';
import * as dictionaries from './assets/languages';

import App from './App';
import { DEMO_ALERT_MESSAGE, ROOT } from './config';

/**
 * Translator config
 */
const collection: Collection = Object.values(dictionaries);
initTranslator('english', collection, { caseSensitive: false, logs: process.env.NODE_TARGET === 'development' });
tryUseBrowserLanguage();

/**
 * Redux config
 */
const rootReducer = combineReducers({
    status,
    wordList,
});
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

// Populate redux store with the saved values in local storage
store.dispatch(loadLanguage());
store.dispatch(loadTheme());
store.dispatch(loadWordList());

/**
 * App init
 */
if (Object.prototype.hasOwnProperty.call(window, 'cordova')) {
    document.addEventListener('deviceready', () => {
        // navigator.splashscreen.hide();
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            ROOT,
        );
    });
} else {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        ROOT,
    );
    alert(DEMO_ALERT_MESSAGE);
}

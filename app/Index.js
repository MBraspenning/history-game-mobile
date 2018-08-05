import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { getQuestion, checkAnswer } from './Reducers';

import App from './containers/App';

const rootReducer = combineReducers({ getQuestion, checkAnswer });
const store = createStore(rootReducer);

export default class Index extends React.Component {
    render() {
        return (
            <Provider store = { store }>
                <App />
            </Provider>
        );
    }
}


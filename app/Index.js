import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { getQuestion } from './Reducers';

import App from './containers/App';

const store = createStore(getQuestion);

export default class Index extends React.Component {
    render() {
        return (
            <Provider store = { store }>
                <App />
            </Provider>
        );
    }
}


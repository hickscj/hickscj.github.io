import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import App from "./App";
import './styles/index.scss';
import { RootState } from './store/store';

ReactDOM.render(
    <Provider store={RootState.store}>
        <PersistGate
            loading={<div>Loading...</div>}
            persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const store = createStore(
    rootReducer,
);
const persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <DndProvider backend={HTML5Backend}>
                    <App/>
                </DndProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss'
import store from './scripts/store'
import { Provider } from 'react-redux'
import Index from './scripts';
function hotRender() {
    ReactDOM.render(
        <Provider store={store}>
            <Index />
        </Provider>
        , document.getElementById('root'));
}
hotRender()
store.subscribe(hotRender)
serviceWorker.unregister();

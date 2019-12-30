import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import createStore from './store/store'
import * as serviceWorker from './serviceWorker';
import Root from './components/Root';
import { fetchTheme, fetchThemes } from './actions/themes_actions';

const store = createStore();
ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.dispatch = store.dispatch;
window.fetchThemes = fetchThemes;
window.fetchTheme = fetchTheme;
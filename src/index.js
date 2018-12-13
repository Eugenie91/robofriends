import React from 'react'; // does the DOM manipulation for us
import ReactDOM from 'react-dom'; // used for virtual DOM --> 'react-dom' is a package
import './index.css'; // --> check in source folder for the index.css file
import App from './containers/App'
//import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//import { robots } from './robots'; // --> ** We have to destructure it as the file robots.js does not have a default export compared to card.js for example

// ** This below is what react does greeting is a property / props --> achieved by using destructuring
ReactDOM.render(<App />, document.getElementById('root'));  // --> ** DEPRECIATED THOUGH in hello.js file, we are calling greeting props using this

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

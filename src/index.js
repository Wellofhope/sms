import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAOptZcjyp2RT9zL_N4lzfxrd-DcozU_0Q",
  authDomain: "chat-a5525.firebaseapp.com",
  databaseURL: "https://chat-a5525.firebaseio.com",
  projectId: "chat-a5525",
  storageBucket: "chat-a5525.appspot.com",
  messagingSenderId: "581620203660",
  appId: "1:581620203660:web:6d29fa4f336cdf637abba9",
  measurementId: "G-7P334KN2MY"
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

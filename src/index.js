import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  name: "User",
  email: "email@vian.ai",
  pn: "917-123-4567"
}

function reducer(state = initialState, action, data = []) {
  switch(action.type){
    case 'UPDATE':
      return {
        name: action.data[0],
        email: action.data[1],
        pn: action.data[2]
      }
    default:
      return state;
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

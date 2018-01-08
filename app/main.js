import ReactDOM from 'react-dom';
import App from './components/App';
import React from 'react'
import { Provider } from 'mobx-react'
import TimerStore from "./Store/TimerStore";

const stores = {
  timer_store: new TimerStore()
}

ReactDOM.render(
  <Provider {...stores} >
    <App/>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);

import ReactDOM from 'react-dom';
import App from './components/App';
import React from 'react'
import { Provider } from 'mobx-react'

const stores = {

}

ReactDOM.render(
  <Provider {...stores} >
    <App/>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);

import React from 'react'
const styles = require('./App.css');
import { observer, inject } from 'mobx-react'
// import TimerStore from '../Store/TimerStore'

// const timer_store = new TimerStore()

@inject('timer_store')
@observer
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <p>Counter: <span id="counter">{timer_store.timer}</span>
          <br/>
          <button onClick={() => timer_store.plusTime()}> + </button>
          <button onClick={() => timer_store.minusTime()}> - </button>
        </p>
      </div>
    )
  }

}

import * as React from 'react'
const styles = require('./App.css');
import { observer, inject } from 'mobx-react'

@inject()
@observer
export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.plusClick = this.plusClick.bind(this)
    this.minusClick = this.minusClick.bind(this)
  }


  componentWillMount() {

  }

  render() {
    return (
      <div>
        <p>Counter: <span id="counter"></span>
          <br/>
          <button onclick={() => this.plusClick()}> + </button>
          <button onclick={() => this.minusClick()}> + </button>
        </p>
      </div>
    )
  }

}

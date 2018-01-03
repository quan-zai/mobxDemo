import * as React from 'react'
const styles = require('./App.css');
import { observer } from 'mobx-react'


@observer
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {
          this.props.store.todos.map(todo =>
            <li>{todo.title}</li>
          )
        }
      </ul>
    );
  }
}

export default App

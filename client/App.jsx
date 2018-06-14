import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import Instructions from './components/Instructions.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mess:'world',
    }
  }
  render() {
    return (
      <Router>
        <div>
          Hello {this.state.mess}
          <Link to={'/ins'}>
            <button>Tell me what to do</button>
          </ Link>
          <Route path='/ins' render={Instructions}/>
        </div>
      </Router>
    );
  }
}

ReactDom.render(<App />,document.getElementById('app'));

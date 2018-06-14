import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import Home from './components/Home.jsx'
import Instructions from './components/Instructions.jsx'
import Edit from './components/Edit.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mess:'world',
      players:[]
    }
  }
  componentWillMount(){
    fetch('http://localhost:3000/players')
    .then(data => data.json())
    .then(Json => this.setState({ players: Json}))
  }
  render() {
    return (
      <Router>
        <div>
          Hello {this.state.mess}
          <Link to={'/ins'}>
            <button>Tell me what to do</button>
          </ Link>
          <Route path='/' exact={true} render={() => <Home players={this.state.players} />} />
          <Route path='/ins' render={Instructions}/>
          <Route path='/edit/:playerId' render={({match}) => {
            return (
              <Edit 
                player={this.state.players.find(player => player.playerId === match.params.playerId)} 
              />)
          }} />
        </div>
      </Router>
    );
  }
}

ReactDom.render(<App />,document.getElementById('app'));

import React from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';

import Card from './PlayerCard.jsx'

function mapStateToProps(state){
  return {players: state.players}
}

const home = (props) => {
  return (
    <div id='homeDiv'>
      <div id='homeTop'>
        {props.players.map(player => <Card player={player} key={player.id} />)}
      </div>
      <div id='homeBottom'>
        <Link to={'/ins'}>
          <Button variant="raised" color="primary" >Instructions</Button>
        </ Link>
        <Link to={'/add'}>
          <Button variant="raised" color="primary">Add a player</Button>
        </Link>
      </div>
    </div>
  )
}

export default home
// export default connect(mapStateToProps)(home);

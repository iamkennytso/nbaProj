import React from 'react'
import {Link} from 'react-router-dom'

import Card from './PlayerCard.jsx'

const home = (props) => {
  return (
    <div id='homeDiv'>
      {props.players.map(player => <Card player={player} key={player.id} />)}
      <br/><br/>
      <Link to={'/ins'}>
        <button>Instructions</button>
      </ Link>
      <Link to={'/add'}>
        <button>Add a player</button>
      </Link>
    </div>
  )
}

export default home
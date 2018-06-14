import React from 'react'

import Card from './PlayerCard.jsx'
const home = (props) => {
  return (
    <div>
      {props.players.map(player => <Card player={player} key={player.id} />)}
    </div>
  )
}

export default home
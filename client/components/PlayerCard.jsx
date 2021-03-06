import React from 'react'
import Card, { CardActions, CardContent} from 'material-ui/Card';
import {Link} from 'react-router-dom'

const card = (props) => {
  const person = props.player;
  return (
    <div className='playerCard'>
      <Link to={`/edit/${person.playerId}`} >
        <Card>
          <CardContent>
            <img 
              className='playerPic'
              src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${person.playerId}.png`} 
              alt={`${person.firstName} ${person.lastName}`}
            />
            <h1>{person.displayName}</h1><br/>
            {`Plays ${person.position} on ${person.teamAbbr} as number ${person.jerseyNo}`}
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}

export default card
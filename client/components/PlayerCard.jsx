import React from 'react'

const card = (props) => {
  return (
    <div>
      <pre><code>{JSON.stringify(props.player, null, 4)}</code></pre>
    </div>
  )
}

export default card
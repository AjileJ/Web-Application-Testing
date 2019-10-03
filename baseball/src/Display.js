import React from 'react'

export default function Display(props) {
  return (
    <div className = 'display'>
   <p>{props.strike}</p>
   <p>{props.ball}</p>
   <p>{props.foul}</p>
   <p>{props.hit}</p>
    </div>
  )
}

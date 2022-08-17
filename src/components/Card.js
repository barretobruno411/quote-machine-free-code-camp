import React from 'react'

const Card = ({quote, newQuote}) => {
  return (
    <div className="card">
        <h1>"{quote}."</h1>

        <button className='quoteBtn' onClick={newQuote}>New Quote</button>
    </div>
  )
}

export default Card
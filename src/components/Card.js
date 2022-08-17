import React from 'react'
import "./Card.scss";


const Card = ({quote, newQuote, author}) => {
  return (
    <div id='quote-box'>
        <h1 id='text'>"{quote}."</h1>
        <p id='author'>Author: {author}</p>

        <button id='new-quote' className='btn' onClick={newQuote}>New Quote</button>

        <a id='tweet-quote' href={`https://twitter.com/intent/tweet?hashtags=FreeCodeCamp&related=freecodecamp&text="${quote}" ${author}`} target="_blank" rel="noreferrer"><button className='btn'>Twitter <img src="./twitter-logo-4.png" alt="twitter" /></button></a>
    </div>
  )
}

export default Card
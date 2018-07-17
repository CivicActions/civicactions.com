import React from 'react'

const Blockquote = ({content, quote_class}) => {
  const{quote, quote_source} = content;
  console.log(quote);

  let quoteClass = `blockquote__wrapper ${quote_class}`;

  return (
    <div className = { quoteClass }>
      <blockquote>
        <p>{ quote }</p>
        <cite> { quote_source } </cite>
      </blockquote>

    </div>
  )
}

export default Blockquote;
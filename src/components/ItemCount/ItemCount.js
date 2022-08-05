import React from 'react'

function ItemCount(props) {
    console.log(props.stock);
    const [clicks, setClicks] = React.useState(1)

    const handleIncrement= () => {
            if (clicks < props.stock) {
              setClicks(clicks+1)
            }
    }

    const handleDecrement= () => {
      if (clicks > props.initial) {
        setClicks(clicks-1)
      }
    }
    
  return (
    <div>
    <h1>ItemCount</h1>
    <button onClick={handleIncrement}>+</button>
    <h3>Clicks: {clicks}</h3>
    <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default ItemCount
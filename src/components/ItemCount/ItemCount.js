import React from 'react'

function ItemCount(props) {
    console.log(props.stock);
    const [Count, setCount] = React.useState(1)

    const handleIncrement= () => {
            if (Count < props.stock) {
              setCount(Count+1)
            }
    }

    const handleDecrement= () => {
      if (Count > props.initial) {
        setCount(Count-1)
      }
    }
    
  return (
    <div>
    <h1>ItemCount</h1>
    <button onClick={handleIncrement}>+</button>
    <h3>Stock: {Count}</h3>
    <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default ItemCount
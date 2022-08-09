import React, { useEffect, useState } from 'react'
import itemsdata from './data/data.js'
import Item from './components/Card/Item.js'


function getProductos(){
  return new Promise( (resolve) => {
    setTimeout (()=> resolve(itemsdata), 2000)
  })
}

function ItemListContainer(props) {

  const [data, setData] = useState([])

  useEffect(() => {
      getProductos().then((respuesta) => {
        setData(respuesta)
      })
    },[])

  return (
    <div>
    <h1>{props.greeting.texto}</h1>
    {
      data.map ((singleMovie)=> {
      return (
       <Item
      key={singleMovie.id}
      title={singleMovie.title}
      category={singleMovie.category}
      img={singleMovie.imgurl}
      price={singleMovie.price}
      />
      )
    })}
    </div>
  );
}

export default ItemListContainer
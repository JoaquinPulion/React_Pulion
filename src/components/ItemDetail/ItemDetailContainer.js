import React, { useEffect, useState } from 'react'
import itemsdata from '../../data/data'
import CardDetail from './ItemDetail'

function getProductos(){
    return new Promise( (resolve) => {
      setTimeout (()=> resolve(itemsdata[0]), 2000)
    })
  }

function ItemDetailContainer() {

    const [item, setItem] = useState([])

    useEffect(() => {
        getProductos().then((respuesta) => {
          setItem(respuesta)
        })
      },[])

  return (
    <div>
     <CardDetail
    key={item.id}
    title={item.title}
    category={item.category}
    img={item.imgurl}
    price={item.price}
    />
    )
    </div>
  )
}

export default ItemDetailContainer
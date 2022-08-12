
function getProductos(){
    return new Promise( (resolve) => {
      setTimeout (()=> resolve(itemsdata[0]), 2000)
    })
  }


export default getProductos
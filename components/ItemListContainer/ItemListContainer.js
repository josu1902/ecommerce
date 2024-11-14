import { useEffect, useState } from "react"
import {getProducts}  from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

import (useEffect)
const ItemListContainer = ({greeting}) => {
const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts ().then(res => {
            console.log(res)
            setProducts(res)


        }).catch(error => {
            console.log(error)

        })
    }, [])

    return(
        <div className="ItemListContainer">
            <h1>{greeting} </h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer
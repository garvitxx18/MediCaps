import React from 'react'
import ItemCard from './ItemCard'
import "../styles/ItemPage.css"
const ItemPage = () => {
  return (
    <div>
      <div class='itemPage--display'>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
      </div>
    </div>
  )
}

export default ItemPage

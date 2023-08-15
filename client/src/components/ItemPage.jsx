import React, { useState } from 'react'
import ItemCard from './ItemCard'
import "../styles/ItemPage.css"
import SearchBar from './SearchBar'

// const [city,setCity] = useState("");

const ItemPage = () => {
  return (
    <div>
      <div>
<SearchBar/>
      </div>
      <div class='itemPage--display'>
        <ItemCard/>
        
      </div>
    </div>
  )
}

export default ItemPage

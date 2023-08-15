import React from 'react'
import "../styles/ItemCard.css"

const ItemCard = () => {
  return (
    <div>
        <div class='itemCard--div1'>
            <div class='itemCard--div2'>
                <div class='itemCard--div3'>
                    <div class="itemCard--div4">
                    <svg
                        class="itemCard--svg-img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                    <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                    </svg>
                    </div>
                </div>
                <div class='itemCard--div5'>
                    <p class='itemCard--para1'>Detached house • 5y old</p>
                    <p class='itemCard--para2'>$750,000</p>
                    <p class='itemCard--para3'>742 Evergreen Terrace</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCard

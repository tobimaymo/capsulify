import React from 'react'
import ItemListContainer from '../../Components/ItemCard/ItemListContainer'

const AllProducts = ({ItemData}) => {
  return (
    <div className='bg-light'>
       <ItemListContainer ItemData={ItemData}/>
    </div>
  )
}

export default AllProducts
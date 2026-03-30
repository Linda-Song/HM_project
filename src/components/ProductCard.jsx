import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = ()=>{
    navigate(`/product/${item.id}`) 
  }
  
  return (
    <div className='card-info' onClick={showDetail}>
      <img src={item?.img} style={{width: "100%", height: "auto"}}></img>
      <div>{item?.choice == true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>${item?.price}</div>
      <div>{item?.new == true ? "New" : ""}</div>
    </div>
  )
}

export default ProductCard

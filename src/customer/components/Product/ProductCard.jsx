import React from 'react';
import "./ProductCard.css";

function ProductCard({product}) {
    return (
        <div className="product-card w-[12rem] m-1 transition-all cursor-pointer">
        <div className='h-[20rem]'>
        <img className='w-full h-full object-cover object-left-top' src={product.image}
       alt='kurta'/> 
       </div>
         <div className='text-part bg-white p-3'>
         <p className='font-bold opacity-60'>{product.brand}</p>
         <p>{product.title}</p>
        
         <div className='flex justify-center space-x-2'>
         <p className='font-semibold'>{product.discountedPrice}</p>
         <p className='line-through opacity-45'>{product.price}</p>
         <p className='text-green-600 font-semibold'>{product.discountPersent}% off</p>
         </div> 
         </div>  
        </div>
    );
}

export default ProductCard;
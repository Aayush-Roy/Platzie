import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import useSingleProduct from '../utils/hooks/useSingleProduct';

function Details() {
   const{id} = useParams();
   const item = useSingleProduct(id);
   const{title,price,images,description} = item;
  return (
    <>
    <Header/>
    <div className='h-screen w-full flex justify-center items-center gap-10 '>
    
     <div className='flex items-center gap-2'>
        <div className='flex flex-col gap-4'>
            <div className='w-24 rounded-lg overflow-hidden'>
                <img src={images && images[0]} className='w-full object-fit' alt="" />
            </div>
            <div className='w-24 rounded-lg overflow-hidden'>
                <img src={images && images[1]} className='w-full object-fit' alt="" />
            </div>
            <div className='w-24 rounded-lg overflow-hidden'>
                <img src={images &&  images[2]} className='w-full object-fit' alt="" />
            </div>
        </div>
        <img className="w-[60vh] rounded-lg" src={images &&  images[0]} alt="" />
     </div>

     <div className='text-white w-1/3'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-xl text-zinc-400 my-8'>{description}</p>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
                <p className='text-2xl  text-zinc-300'>Price</p>
                <p className='text-xl font-bold'>${price}</p>
            </div>
            <button className='px-10 bg-purple-600 px-10 py-2 rounded-lg'>Add To Cart</button>
        </div>
     </div>
    </div>
    </>
  )
}

export default Details

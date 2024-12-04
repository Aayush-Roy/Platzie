import React from 'react'
import { Link } from 'react-router-dom'
import { TbLogin2 } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { PiShoppingBagOpenFill } from "react-icons/pi";
function Header() {
  const cart = useSelector(store=>store.cart.items);

  return (
    <div  style={{
        backgroundImage: 'url("https://react-shop-siza.vercel.app/assets/AbstractDesign-5_Gpi5_9.svg")',
        backgroundPosition: "center",
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundRepeat: "no-repeat", // Prevents tiling
      }} className='flex justify-between border-b-2 border-zinc-700 px-10 py-6' >
        <div>
      <img className='w-12' src="https://fakeapi.platzi.com/_astro/logo.aa139940.png" alt="" />
      </div>
      <div className='border border-zinc-700 px-10 rounded-full bg-zinc-900 text-white flex items-center gap-20 text-xl font-semibold'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link>Categories</Link>
        <Link to="/cart"><span className='flex items-center'><p className='text-2xl'><PiShoppingBagOpenFill/></p>
        {cart.length > 0 &&
        <sup
        className='bg-orange-400 absolute top-8 right-[36%] px-1 py-2 text-black rounded-full'
        >{cart.length}</sup>
        }
        </span></Link>
      </div>
      <div>
        <button className='flex text-xl items-center justify-between text-white  font-bold bg-zinc-800 border-2 border-zinc-600 px-2 gap-2 py-[4px] rounded-md'>
           <p className='font-bold'> <TbLogin2 /> </p>
            <p>Login</p>
        </button>
      </div>
    </div>
  )
}

export default Header

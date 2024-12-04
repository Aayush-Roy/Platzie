import { useDispatch, useSelector } from "react-redux";
import { FaDeleteLeft } from "react-icons/fa6";
import Header from "./Header";
import {removeItem} from "../utils/store/cartSlice";
const Cart = ()=>{
  const cartItems = useSelector(store=>store.cart.items)
  const dispatch = useDispatch();

  const deleteHandler = (id)=>{
    dispatch(removeItem(id))
  }
  if(cartItems.length ==0)
  {
    return  <div className="h-screen w-screen">
            <Header/>
            <div className="w-1/2 text-center mx-auto mt-16">
                <h1 className="text-4xl text-white text-center">Your cart is empty</h1>
                <p className="text-lg text-white text-center">Go to the shop and add some items</p>
                
                <img className="w-[70vh] mx-auto" src="https://cdn.pixabay.com/photo/2013/07/12/19/04/basket-154317_640.png" alt="" />
            </div>


    </div> 
  }
//   `${cartItems.length==0 ? 'h-full' : 'h-[100vh]'} `
  console.log(cartItems)
    return  (
    <>
    <Header/>
    <div className="">
      
        {cartItems && cartItems.map(item=>(
             <div className="w-[50%] justify-between mb-5 rounded-lg bg-zinc-800 p-2 mx-auto flex mt-7">
             <div className="w-[40vh] bg-green-500 h-[27vh] overflow-hidden rounded-lg">
                 <img src={item.images[0]} className="h-full w-full object-fit" alt="" />
             </div>
             <div className="w-1/2">
                 <h1 className="text-xl text-zinc-300">{item.title}</h1>
                 <p className="text-sm my-3 text-zinc-500">{item.description.slice(0,150) +  "..."}</p>
                 <h1 className="text-xl text-white font-semibold">${item.price}</h1>
                 <button
                 onClick={()=>deleteHandler(item.id)}
                 className="text-2xl text-red-600 font-black rounded-full cirsor-pointer text-white"><FaDeleteLeft/></button>
             </div>
         </div>
        ))}
       
    </div>
    </>
)}

export default Cart;
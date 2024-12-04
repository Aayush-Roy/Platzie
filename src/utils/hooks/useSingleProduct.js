import { useEffect, useState } from "react";
import { API } from "../constraints";

const useSingleProduct = (id)=>{
    const[item,setItem] = useState([]);
//    console.log(id);
   useEffect(()=>{
    getSingleItem();
   },[id])
   const getSingleItem =async()=>{
    const respose = await fetch(`${API}/${id}`);
    const data = await respose.json();
    console.log(data)
    setItem(data);
   }
   return item;
}

export default useSingleProduct;


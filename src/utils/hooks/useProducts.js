import { useEffect, useState } from "react";
import { API } from "../constraints";

const useProducts = ()=>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getData();
      }, []);
    
      const getData = async () => {
        const data = await fetch(API);
        const json = await data.json();
        setProducts(json.slice(1, 41)); // Only slice when setting state.
        // setFilterProducts(json.slice(1, 41)); // Set initial filtered products.
      };
      return products;
}
export default useProducts;
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import useProducts from "../utils/hooks/useProducts";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/store/cartSlice";

function Body() {
  const [filterProducts, setFilterProducts] = useState([]);
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cart);

  const cartHandler = (product) => {
    dispatch(addItem(product));
  };

  const products = useProducts();

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <>
      <Header />
      <div className="flex">
        {/* Main Product List */}
        <div className="bg-zinc-900 flex flex-wrap gap-8 py-4 w-[75%] p-2">
          {filterProducts.map((product) => (
            <div
              key={product.id}
              className="w-[50vh] rounded-lg bg-zinc-900 px-6 py-4 border border-zinc-800"
            >
              {/* Wrap only the image in a Link */}
              <Link to={`/products/${product.id}`}>
                <div className="bg-blue-300 h-[45vh] rounded-lg overflow-hidden w-full">
                  <img
                    src={product.images[0]}
                    className="w-full h-full"
                    alt={product.title}
                  />
                </div>
              </Link>
              <h1 className="text-white text-xl mt-2 font-semibold">
                {product.title.length > 20
                  ? product.title.slice(0, 28) + "..."
                  : product.title}
              </h1>
              <p className="text-white text-xs text-zinc-600 mt-3">
                {product.description.length > 60 ? (
                  <>
                    {product.description.slice(0, 100)}
                    <b className="text-white"> ...more</b>
                  </>
                ) : (
                  product.description
                )}
              </p>
              <div className="flex justify-between mt-3 items-center">
                <p className="text-xl font-semibold text-white">
                  ${product.price}
                </p>
                <button
                  onClick={() => cartHandler(product)}
                  className="bg-purple-700 text-white px-8 py-2 rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <SideBar resData={products} resFn={setFilterProducts} />
      </div>
    </>
  );
}

export default Body;

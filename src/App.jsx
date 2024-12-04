import React from 'react'
import Body from './components/Body'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import About from './components/About'
import Details from './components/Details'
import Cart from './components/Cart'
import {Provider} from "react-redux";
import appStore from './utils/store/appStore'
const App = () => {
  return (
    <div className='bg-zinc-900  w-full'>
      <Provider store={appStore}>
      {/* <Body/> */}
      <Outlet/>
      </Provider>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/products/:id",
        element:<Details/>
      },
      {
        path:"/cart",
        element:<Cart/>,
      }
    ]
  }
])

function Main(){
  return (
   <RouterProvider router={appRouter}/>
  )
}

export default Main;

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProgressBar from 'react-progressbar-on-scroll'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Nav from "./Component/Nav";
import Loader from "./Component/Loader";
import AnimatedCursor from "react-animated-cursor"
import './app.scss'
import Product from "./Pages/Project/Product";
import { useEffect, useState } from "react";
import useGetData from "./custom-hook/useGetData";
function App() {
  const LayOut = () => {
    const [navOpen, setNavOpen] = useState(false);
    // const [isLoader, setIsLoader] = useState(false)
    const { dataLoading } = useGetData('products')
    // useEffect(() => {
    //   setIsLoader(true)
    //   setTimeout(() => {
    //     setIsLoader(false)
    //   }, 2000);
    // }, [])
    return (
      <div className="app">
        {dataLoading ? (<Loader />) : (
          <>
            <AnimatedCursor
              innerSize={10}
              outerSize={30}
              color='0, 0, 0'
              outerAlpha={0.2}
              innerScale={1.5}
              outerScale={3}
              clickables={[
                'a',
                'button',
              ]}
            />
            <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
            <Outlet />
          </>
        )}
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product/:Id",
          element: <Product />,
        },

      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
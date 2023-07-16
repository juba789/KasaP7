import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from '../pages/HomePage';
import Navbar from '../components/Navbar';
import Footer from '../layout/Footer';
import Main from '../layout/Main'

const HeaderFooterLayout=()=>{
  return(
    <>
    <Navbar />
    <Main>
    <Outlet/>
    </Main>
    <Footer/>
   </>

  );
}

const router =createBrowserRouter ([
  {
    element:<HeaderFooterLayout/>,
    errorElement:<h1>404 not found</h1>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
       path:'/flat',
       element:<h1>Appartement</h1>
      },
      {
        path:'/about',
        element:<h1>A propos</h1>

      }
    ]
}
])

export { router };

  
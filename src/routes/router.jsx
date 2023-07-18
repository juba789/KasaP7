import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from '../pages/HomePage';
import Navbar from '../components/Navbar';
import Footer from '../layout/Footer';
import Main from '../layout/Main'
import AppartPage from '../pages/AppartPage';
import About from '../pages/About'
import ErrorPage from '../pages/ErrorPage';

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
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
       path:'/flat',
       element:<AppartPage/>
      },
      {
        path:'/about',
        element:<About />

      }
    ]
}
])

export { router };

  
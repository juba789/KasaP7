import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Navbar />
        <App />
        <Footer />
        </>
  
      ),
      errorElement:<h1>404 not found</h1>
    },
    {
      path: "/flat",
      element:(
        <>
        <Navbar />
        <h1>Nos appartements</h1>
        <Footer />
     </>
      )
       },
    {
      path: "/about",
      element:(
        <>
        <Navbar />
        <h1>A propos</h1>
        <Footer />
        </>
  )
    }
   
  ]);

  export { router };

  
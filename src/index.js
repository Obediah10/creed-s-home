import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Residences from './Components/Residences/Residences';
import { Getstarted } from './Components/Getstarted/Getstarted';
import Contacts from './Components/Contacts/Contacts';
import About from './Components/About/About';



const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>
  },
  // {
  //   path: '/hero',
  //   element: <Hero/>,
  // },
  {
    path: '/residences',
    element: <Residences/>,
  },
  {
    path: '/About',
    element: <About/>,
  },
  {
    path: '/getstarted',
    element: <Getstarted/>,

  },
  {
    path: 'contacts',
    element: <Contacts/>
  }
  ]);
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
     <RouterProvider router={router}/>
  )
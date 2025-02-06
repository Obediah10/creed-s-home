import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Hero from './Components/Hero/Hero';
import Residences from './Components/Residences/Residences';
import Value from './Components/Value/Value'
import { Getstarted } from './Components/Getstarted/Getstarted';
import Contacts from './Components/Contacts/Contacts';



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
  // {
  //   path: '/value',
  //   element: <Value/>,
  // },
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
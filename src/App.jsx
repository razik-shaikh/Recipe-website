import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //for older method of routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom'//for newer method of routing

import FeaturedRecipe from './components/FeaturedRecipe'
import FullRecipeDetail from './components/FullRecipeDetail';
import SavedRecipes from './components/SavedRecipes';
import NotFound from './pages/NotFound';
import { Bounce, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <FeaturedRecipe />


  },
  {
    path: '/recipe/:id',
    element: <FullRecipeDetail />

  },
  {
    path: '/SavedRecipes',
    element: <SavedRecipes />

  }, {
    path: '*',
    element: <NotFound />

  }
])

function App() {

  return (
    <>
    {/* Toast or Notification container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />







      {/* newer method of routing */}
      <RouterProvider router={router} />

      {/* older method of routing */}
      {/* <Router>
        <Routes>
          <Route path='/' element={<FeaturedRecipe />} />
          <Route path='/:id' element={<RecipePage />} />
        </Routes>
      </Router> */}


    </>
  )
}

export default App

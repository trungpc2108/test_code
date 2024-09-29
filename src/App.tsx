
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CartPage from './components/cartPage'

import Index from './components'

import Homepages from './components/homepages'
import Layout from './components/layout'
import Index_in from './components/index_in'


function App() {

  return (
    <>
      <Routes >
        <Route path='' element={<Layout />}>
          <Route path='home' element={<Homepages />} />
          <Route path='cart' element={<CartPage />} />

          <Route path='index' element={<Index />} />

          <Route path='index_in' element={<Index_in />} />



        </Route>
      </Routes>
    </>
  )
}

export default App

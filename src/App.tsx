
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'

import Page from './components/page'




function App() {

  return (
    <>
      <Routes >
        <Route path='' element={<Layout />}>

          <Route path='page' element={<Page />}/>



        </Route>
      </Routes>
    </>
  )
}

export default App

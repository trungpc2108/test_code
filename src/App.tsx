
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Test123 from './components/test123'

function App() {

  return (
    <>
      <Routes >
        <Route path='' element={<Layout />}>
          <Route path='test123' element={<Test123 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

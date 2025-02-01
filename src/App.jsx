import React from 'react'
import UserList from './pages/props/UserList'
import UserDirectory from './pages/mapMethod/UserDirectory'
import UserDirectory1 from './pages/mapMethod/UserDirectory1'
import ProductsTable from './pages/mapMethod/ProductsTable'
import ImageCarousel from './pages/carousel/ImageCarousel'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/mapMethod/ProductDetails'
import Accordion from './pages/Accordion/Accordion'



const App = () => {
  return (
    <Router>
      <div>
        <h1>wellcome to practice the react</h1>
        <Routes>
          {/* <UserList />
      <UserDirectory />
      <UserDirectory1 /> */}
          {/* <ImageCarousel /> */}
          <Route path='/' element = {<ProductsTable />} />
          <Route path='/productDetail/:id' element = {<ProductDetails />} />
          <Route path='/accordin' element= {<Accordion />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App

import React from 'react'
import UserList from './pages/props/UserList'
import UserDirectory from './pages/mapMethod/UserDirectory'
import UserDirectory1 from './pages/mapMethod/UserDirectory1'
import ProductsTable from './pages/mapMethod/ProductsTable'
import ImageCarousel from './pages/carousel/ImageCarousel'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/mapMethod/ProductDetails'
import Accordion from './pages/Accordion/Accordion'
import Contact from './pages/ContactForm/Contact'
import Tabs from './pages/Tabs/Tabs'
import Dice from './pages/Dice/Dice'
import ProductsDetails1 from './pages/mapMethod/ProductsDetails1'
import FileExplorer from './pages/FileExplorer/FileExplorer'




const App = () => {
  return (
    <Router>
      <div>
        <h1 className='text-3xl text-center mt-4 font-bold'>Hey You !! Lets practice the ReactJS</h1>
        <Routes>
          <Route path='/' element = {<ProductsTable />} />
          <Route path='/productsTable' element = {<ProductsDetails1 />} />
          <Route path='/useList' element={<UserList />} />
          <Route path='/userDirectory' element={<UserDirectory />} />
          <Route path='/userDirectory1' element={<UserDirectory1 />} />
          <Route path='/imageCarousel' element={<ImageCarousel />} />
          <Route path='/productDetail/:id' element = {<ProductDetails />} />
          <Route path='/accordin' element= {<Accordion />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/tabs' element = {<Tabs />} />
          <Route path='/dice' element = {<Dice />} />
          <Route path='/fileExplorer' element = {<FileExplorer />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App

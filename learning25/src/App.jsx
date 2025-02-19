import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Aboutus from './components/Aboutus'
import Array1 from './components/Array1'
import Array2 from './components/Array2'
import Array3 from './components/Array3'
import Cricketers from './components/Cricketers'
import Product from './components/Product'
import Usestate1 from './components/Usestate1'
import Usestate2 from './components/Usestate2'
import Input1 from './components/Input1'
import Navbar1 from './components/hotstar/Navbar1'
import { Route, Routes } from 'react-router'
import HotstarHome from './components/hotstar/HotstarHome'
import Welcome from './components/hotstar/Welcome'
import HotstarMovie from './components/hotstar/HotstarMovie'
import Error404 from './components/hotstar/Error404'
import Play from './components/hotstar/Play'
import Form1 from './components/forms/Form1'
import Form2 from './components/forms/Form2'
import Apidemo1 from './components/apis/Apidemo1'
import Searchmovie  from './components/apis/omdb/searchMovie'
import MovieDetails from './components/apis/omdb/MovieDetails'

function App() {

  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/home' element={<HotstarHome/>}></Route>
        <Route path='/play/:id' element={<Play/>}></Route>
        <Route path='/movies' element={<HotstarMovie/>}></Route>
        <Route path='/form1' element={<Form1/>}></Route>
        <Route path='/form2' element={<Form2/>}></Route>
        <Route path='/api1' element={<Apidemo1/>}></Route>
        <Route path='/searchmovie' element={<Searchmovie/>}></Route>
        <Route path='/moviedetails/:id' element={<MovieDetails/>}></Route>
        <Route path='/*' element={<Error404/>}></Route>
      </Routes>
    </div>
  )
}

export default App

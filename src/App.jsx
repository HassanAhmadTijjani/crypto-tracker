// @ts-nocheck
import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom' 
import CoinDetail from './pages/CoinDetailPage'
import NavBar from './components/NavBar'
import Gainers from './pages/Gainers'
import Losers from './pages/Losers'
import Footer from './components/Footer'


const App = () => {
  return (
  //  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
  //     <h1 className="text-4xl font-bold text-blue-500 bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500">
  //       Crypto Tracker 🚀
  //     </h1>
    //   </div>
    <>
       <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route index element={<HomePage />} /> */}
        <Route path='/coin/:coinId' element={<CoinDetail />} />
        <Route path='/gainers' element={<Gainers />} />
        <Route path='/losers' element={<Losers />} />
    </Routes>
      <Footer />
    </>
  )
}

export default App
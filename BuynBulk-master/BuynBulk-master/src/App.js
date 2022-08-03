import Home from './home'
// import Header from './Components/Header'
// import Shop from './Shop'
import React, { useState } from 'react'
import CategoriesCard from './Components/categoriesCard'
// import RecentProd from './Components/recentProd'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
// import { Link } from "react-router-dom";
import Sucess from './Components/Sucess'
import Message from './Components/Message';
import Header from './Components/Header'

function App(){
  const[message,setmessage] = useState('')
    return(
      <BrowserRouter>
      <div className="Appp" >
        <Routes>
          {/* <Header />  */}
            <Route path='/' element={<Home />} />
            <Route path='/categories' element={<CategoriesCard />} />
            <Route path='/Sucess' element={<Sucess/>} />
            <Route path='/Message' element={<Message/>} />
            <Route path='/Contact' element={<Contact message={message} setmessage={setmessage}/>} />
        </Routes>
      </div>
      </BrowserRouter>


    )

}


export default App;


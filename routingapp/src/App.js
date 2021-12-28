import React from 'react'

import {Routes,Route} from 'react-router-dom'
import Menu from './Menu/Menu';
import About from './About/About';
import Mywork from './MyWork/Mywork';
class App extends React.Component
{  
    render()
    {     
      return <div id="page-wraper">  

      <Menu/>

      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/work" element={<Mywork/>}/>
        
      </Routes>

    </div>

    }
}

export default App;
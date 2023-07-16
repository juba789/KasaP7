import React from 'react'
import "./App.css"
import Banner from './components/Banner' 
import AppartGrid from './components/AppartGrid'
import Main from './components/Main'


function App() {
  return (
    <div>
      <Main>
       <Banner/>
       <AppartGrid/>
      </Main> 
    </div>
  )
}

export default App

import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  
  
  
  return (
  <BrowserRouter>
  <Routes>
    <Route  path='/' element={<h1>this is home page</h1>}/>
    <Route path= 'about' element= {<h1>this is about page</h1>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App


import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import UseEffect from './UseEffect'

function App() {
  
  
  
  return (
  <BrowserRouter>
  <Routes>
    <Route  path='/' element={<Home />}/>
    <Route path= 'about' element= {<About />} />
    <Route path = 'useEffect' element = {<UseEffect />}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App

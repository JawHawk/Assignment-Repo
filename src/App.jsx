import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Home'
import { BrowserRouter,Routes, Route, useLocation} from 'react-router-dom'
import CreateUser from './components/CreateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/CreateUser' element={<CreateUser />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

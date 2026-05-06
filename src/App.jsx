
import './App.css'
import Home from "./component/Home"
import AboutUs from './component/AboutUs'
import NotFound from './component/NotFound'
import { Routes, Route } from 'react-router-dom'

// BrowserRouter is a component that provides routing capabilities to the application. It allows you to define different routes and navigate between them without reloading the page.

// Routes are defined using the Route component, which specifies the path and the component to render when that path is accessed. 

// Route are defined using the Route component, which specifies the path and the component to render when that path is accessed. 
// React-router-dom is a library that provides routing capabilities to React applications. It allows you to define different routes and navigate between them without reloading the page.

function App() {


  return (
    <div>
      <Routes>
       <Route path='/' element={<Home name="John" surname="Doe"/>}/>
       <Route path='/About' element={<AboutUs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App

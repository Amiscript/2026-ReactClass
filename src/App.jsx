
import './App.css'
import Home from "./component/Home"
import AboutUs from './component/AboutUs'
import NotFound from './component/NotFound'
import Navbar from './component/Navbar'
import Pricing from './component/Pricing'
import Blog from './component/Blog'
import Contact from './component/Contact'
import { Routes, Route } from 'react-router-dom'

// BrowserRouter is a component that provides routing capabilities to the application. It allows you to define different routes and navigate between them without reloading the page.

// Routes are defined using the Route component, which specifies the path and the component to render when that path is accessed. 

// Route are defined using the Route component, which specifies the path and the component to render when that path is accessed. 
// React-router-dom is a library that provides routing capabilities to React applications. It allows you to define different routes and navigate between them without reloading the page.

// link - is a component that is used to create links to different routes in the application. It is a part of the react-router-dom library and is used to navigate between different pages without reloading the page. The Link component is similar to the a tag in HTML, but it provides additional functionality for handling navigation in a React application.

// a tag is used to create a hyperlink to another page or resource. It is a standard HTML element that is used to navigate between different pages on the web. When a user clicks on an a tag, it will take them to the specified URL or resource.

// navigate- is a function provided by the react-router-dom library that allows you to programmatically navigate to a different route in your application. It is typically used in event handlers or other functions where you want to redirect the user to a different page without using a Link component. The navigate function takes a path as an argument and changes the current route to that path, allowing you to control the navigation flow of your application.
function App() {


  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home name="John" surname="Doe"/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Blog' element={<Blog/>}/> 
       <Route path='/About' element={<AboutUs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App

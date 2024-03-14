
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Home from "../src/components/Home"
import "./styles/Tab.css"
// import AccessNav from "../src/components/AccessNav"
import Page from "../src/components/Page1"
// import Question from './components/Question'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element: <Home/>

    },
    {
      path:"Question",
      element:<Page/>
    }
  ])
  

  return (
    <>
      <div>
     
      <RouterProvider router={router}/>
       
      </div>
        
    </>
  )
}

export default App


import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Home from "../src/components/Home"
import "./styles/Tab.css"
// import AccessNav from "../src/components/AccessNav"
import Page from "../src/components/Page1"
import Tab from './components/Tab'
import Button from './components/Button'
import Bar from './components/Downbar'
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
    },
    {
      path:"tab",
      element: <Tab    text="HTML"  path="/Question" svg={<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#306AFF" d="M21.25 18.75A3.75 3.75 0 0 1 25 15h3.75a1.25 1.25 0 0 1 0 2.5H25a1.25 1.25 0 0 0-1.25 1.25V20A1.25 1.25 0 0 0 25 21.25h1.25A3.75 3.75 0 0 1 30 25v1.25A3.75 3.75 0 0 1 26.25 30H22.5a1.25 1.25 0 0 1 0-2.5h3.75a1.25 1.25 0 0 0 1.25-1.25V25a1.25 1.25 0 0 0-1.25-1.25H25A3.75 3.75 0 0 1 21.25 20v-1.25ZM20 16.25a1.25 1.25 0 0 0-2.5 0v10a1.25 1.25 0 0 1-1.25 1.25h-2.5a1.25 1.25 0 0 0 0 2.5h2.5A3.75 3.75 0 0 0 20 26.25v-10Zm-15-5A6.25 6.25 0 0 1 11.25 5h17.5A6.25 6.25 0 0 1 35 11.25v17.5A6.25 6.25 0 0 1 28.75 35h-17.5A6.25 6.25 0 0 1 5 28.75v-17.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v17.5a3.75 3.75 0 0 0 3.75 3.75h17.5a3.75 3.75 0 0 0 3.75-3.75v-17.5a3.75 3.75 0 0 0-3.75-3.75h-17.5Z"/></svg>}/>
    },
    {
      path:"btn",
      element:<Button/>
    },
    {
      path:"bar",
      element:<Bar/>
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

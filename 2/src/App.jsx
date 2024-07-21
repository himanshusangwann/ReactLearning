import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Classbased from './components/Classbased'
import Functionalbased from './components/Functionalbased'
import Arrowfunction from './components/Arrowfunction'
import Productlist from './components/Product-list/Productlist'
const Dummydata = ['person1','Person2','Person3']


function App() {
  const [count, setCount] = useState(0)
  const Dummydata = ['person1','Person2','Person3']
 


  return (
    <>

      <h1>Hello from React to world</h1>
      <Classbased/>
      <Functionalbased/>
      <Arrowfunction/>
      <Productlist name='Himanshu' city='chd' d = {Dummydata} />
      
      
      
      
    </>
  )
}

export default App

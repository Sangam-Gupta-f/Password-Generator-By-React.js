import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
     <h2 className='text-3xl font-bold '>Password Generator</h2>
     <div>
     <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
     <form className='flex padding' >
     <input type="range" id="vol" name="vol" min="0" max="50"/>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label for="vehicle1"> includeNum</label><br/>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label for="vehicle2"> includeCharacter</label><br/>
  
    </form>
     </div>
    
    </>
  )
}

export default App

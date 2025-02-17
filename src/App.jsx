import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [length, setLength] = useState(8)
  const [numInclude, setNumberAllowed] = useState(false);
  const [charInclude, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("") 

   function len(){
    let str="ASDFGHJKLMNBVCXZQWERTYUIOP";
    let num="1234567890";
    let ch="!@#$%^&*()_+";
    if(numInclude){
      str+=num;
    }
    if(charInclude){
      str+=ch;
    }
    let pas="";
    for(let i=0;i<length;i++){
      let n=Math.floor(Math.random()*length+1);
     pas+=str.charAt(n);
    }
    setPassword(pas);

   } 
   useEffect(() => {
    len()
  }, [length, numInclude, charInclude])


 // let len="25";
  return (
    <>
     <h2 className='text-3xl font-bold '>Password Generator</h2>
     <div>
     <input type="text" value={password} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
     <form className='flex padding' >
     <input type="range" value={length} onChange={(e)=>{setLength(e.target.value)}} id="vol" name="vol" min="0" max="50"/>
     <p>{length}Length </p>
    <input type="checkbox"  onChange={() => {
              setNumberAllowed((prev) => !prev);
          }} id="vehicle1" name="vehicle1" value="Bike"/>
      <label for="vehicle1"> includeNum</label><br/>
     <input type="checkbox" onChange={() => {
              setCharAllowed((prev) => !prev);
          }} id="vehicle2" name="vehicle2" value="Car"/>
     <label for="vehicle2"> includeCharacter</label><br/>
  
    </form>
     </div>
    
    </>
  )
}

export default App

import React, { useState } from 'react'
import Counter from "./components/Counter";
import Nav from "./components/Nav";

function App() {
  const [showCounter, SetshowCounter] = useState(false)
  const setVisible = () =>{
    SetshowCounter(!showCounter)
    console.log(showCounter)
  }
  return (
    <>
    <Nav/>
    <div className=" h-screen justify-center flex flex-col items-center gap-2">
      <button onClick={setVisible} className="p-4 px-6 bg-sky-700 text-white">
     show counter 
      </button>
      {showCounter ? <Counter /> : ''}

    </div>
    </>
  )
}

export default App;

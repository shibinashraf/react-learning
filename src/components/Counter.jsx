import React, { useState } from 'react'

const Counter = () => {
    const [count,SetCount] = useState(0)
    const incrementCounter = () =>{
        SetCount(count+1);
    }
  return (
    <div className='h-[20rem] w-[60%] bg-slate-300 rounded-2xl flex flex-col items-center justify-center gap-4'>
       <div className='p-8 px-12 bg-slate-100 shadow-md rounded-md text-xl'>{count}</div>
       <button onClick={incrementCounter} className='p-4 px-6 bg-blue-500 rounded-xl shadow-xl text-white'>Click Me</button>

    </div> 
  )
}

export default Counter
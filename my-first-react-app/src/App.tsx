import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)
  const zj=()=>{setCount(count+1)}
  const js=()=>{setCount(count-1)}
  const cz=()=>{setCount(0)}
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React 学习</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test <b>HMR</b>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the <b>Vite</b> and <b>React</b> logos to learn more
      </p>


      <div>
        <p className='bt'>测试计数器</p>
        <p>当前计数: <b> {count} </b> </p>
        <button onClick={zj}>增加+</button>
        <button onClick={js}>减少-</button>
        <button onClick={cz}>重置</button>
      </div>
      <div>



      </div>



    </>

    
  )
  
}

export default App

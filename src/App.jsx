import { useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import TopPage from './component/TopPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <header>
        <Banner/>
      </header>
      <main>
        <TopPage/>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    
      </main>
      <footer>
        <p>
          Developped by Pierrick Viarde . VP Web Solutions
        </p>
      </footer>
      
    </>
  )
}

export default App

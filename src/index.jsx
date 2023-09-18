import './style.css'
import ReactDOM from 'react-dom/client'
import Products from './Products'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function App() {

  return (  

   <BrowserRouter>
        <Products />
    </BrowserRouter>
  )
}

root.render(<App />)

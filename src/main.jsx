import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {First,Fruit,Color} from './Component.jsx'
import {First1,Fruit1,Color1} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <First />
    <Fruit />
    <Color />
    <First1 />
    <Fruit1 />
    <Color1 />
  </StrictMode>,
)

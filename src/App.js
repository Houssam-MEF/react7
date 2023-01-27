import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import AddContact from './Components/Routers/AddContact'
import AllContacts from './Components/Routers/AllContacts'
import "./style.css"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<AllContacts />} />
      <Route path="/AddContact" element={<AddContact />} />
      </Routes>
    </div>
  )
}

export default App

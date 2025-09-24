import 'styles/index.css'
import appLogo from 'assets/app-logo.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Entry from 'pages/Entry';
import Landing from 'pages/Landing';
import Dashboard from 'pages/Dashboard';

// Import fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

function App() {
  return (
    <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Landing />} />
          <Route path='/entry' element={<Entry />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

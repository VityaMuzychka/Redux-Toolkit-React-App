import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Contact} from './components/Contact';
import { Navbar } from './components/Navbar';
import { Error } from './components/Error';
import { Login } from './components/Login';


function App() {
 
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

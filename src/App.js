import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';
import { Profile } from './components/Profile';
import {Contact} from './components/Contact';
import { Navbar } from './components/Navbar';
import { Error } from './components/Error';
import { Login } from './components/Login';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
 
  return (
    <div className="App">
     <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Error />}/>
        </Routes>
      </Router>
     </Provider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import NewUser from './Pages/NewUser';

function App() {
  return (
    <div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/register' element={<NewUser/>}/>
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login/>}/>
              
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;

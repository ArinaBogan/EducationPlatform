import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import RegPage from './pages/RegPage/RegPage';
import LoginPage from './pages/LoginPage/LoginPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/reg' element={<RegPage />}></Route>
        <Route path='/log' element={<LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

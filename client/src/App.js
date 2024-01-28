import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import RegPage from './pages/RegPage/RegPage';
import LoginPage from './pages/LoginPage/LoginPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/reg' element={<RegPage />}></Route>
        <Route path='/log' element={<LoginPage />}></Route>
        <Route path='/listcourses' element={<CoursesPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

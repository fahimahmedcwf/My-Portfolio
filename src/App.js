import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProjects from './Portfolio/AllProjects';
import HomePage from './Portfolio/HomePage';
import Navbar from './Portfolio/Navbar';

function App() {

  return (
    <div className="App" >
      <Navbar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/' element={<AllProjects></AllProjects>}></Route>
        </Routes>
      </Navbar>
    </div >
  );
}

export default App;

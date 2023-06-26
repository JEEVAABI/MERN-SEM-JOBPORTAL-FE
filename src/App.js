import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllJobComponent from './components/GetAllJobComponent/GetAllJobComponent';
import AddNewJobComponent from './components/AddNewJobComponent/AddNewJobComponent';
import EditJobComponent from './components/EditJobComponent/EditJobComponent';




function App() {
  return (
    <Router>
      <div className='container'>
        <h1>Find Jobs</h1>
        <nav className='nav-menu'>
          <Link to="/">Home</Link>
          <Link to="/admin/add" >Add Jobs</Link>
          <Link to="/admin/edit" >Edit Jobs</Link>
          </nav>
          <Routes>
            <Route exact path='/' element={<GetAllJobComponent/>}/>
            <Route path = '/admin/add' element={<AddNewJobComponent/>} />
            <Route path = '/admin/edit' element={<EditJobComponent/>}/>

          </Routes>

      </div>

    </Router>

  );
}

export default App;

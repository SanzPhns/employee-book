import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployee from './forms/AddEmployee';
import ShowEmployee from './forms/ShowEmployee';
import EditEmployee from './forms/EditEmployee';
import Home from './Home';
  
ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route path ='/' element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path ='/addEmployee' element={<AddEmployee/>}/>
        <Route path='/showEmployee' element={<ShowEmployee/>}>
           <Route path=':employeeId'element={<EditEmployee/>}/>
        </Route> 
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'));
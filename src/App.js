import './App.css'
import { Link, Outlet } from "react-router-dom";
import { ContextProvider } from './Context';

const App = () => {

  return(
    //this is app
    <ContextProvider>
       <div className='wrapper'>
      <nav className='nav-app'> 
        <Link to="/" className='nav-app-item'>Home</Link><br/>
        <div className='nav-app-div'>
          <Link to="/addEmployee" className='nav-app-item'>Add Employee</Link><br/>
          <Link to="/showEmployee" className='nav-app-item'>Employee List</Link>
        </div>
    </nav>
    <div className='main'>
    <Outlet/>
    </div>
    
    </div>
    </ContextProvider>
  );
}

export default App;
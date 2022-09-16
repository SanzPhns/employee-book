
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Context } from '../Context';
import './AddEmployee.css'

const ShowEmployee = ()=> {

    const {employeeDetails, setEmployeeDetails} = 
    useContext(Context);

    const handleDelete = (employeeId)=>{
        setEmployeeDetails(current => 
           current.filter(detail => {
               return detail.employeeId !== employeeId
           })
        )
     }

    const det = employeeDetails.map(({employeeId, firstName, lastName, designation, location}) => (
        
            <div className="showDetails" key={employeeId}>
            
                <div>
                    <p>Employee ID: {employeeId}</p>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Designation: {designation}</p>
                    <p>Location: {location}</p>
                </div>
                <div className='editDeleteButtons'>
                <Link to={`/showEmployee/${employeeId}`}><button className='editButton'>Edit</button></Link>
                <button onClick={() => handleDelete(employeeId)} className='deleteButton'>Delete</button>
            </div>
            </div>
    ));
    const element = <div>
        <h3>No Emplyee added <span><Link to='/addEmployee'>Add</Link></span></h3>
    </div>
    return(
        <div>
            <div>
            {employeeDetails.length === 0?element:
            <div><h2>Employee Details</h2></div>
            }  
            </div>
            <div className='employeeDetails'>
              {det}
            </div>
            <Outlet/>
        </div>
    );
}

export default ShowEmployee;
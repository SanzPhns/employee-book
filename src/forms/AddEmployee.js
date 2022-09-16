
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import './AddEmployee.css'
    
const AddEmployee = ()=>{
    const initialValue = {
        "employeeId": '',
        "firstName": '',
        "lastName": '',
        'designation': '',
        "location": ''
    }
    const {details, setDetails, setEmployeeDetails} = useContext(Context);
    const [added, setAdded] = useState(false);
   
    const handleChange = (e) => {
        setDetails({...details, [e.target.name]:e.target.value})
    }
    useEffect(()=>{
        setDetails(initialValue);
    },[])

    const handleSubmit = (e) => {
        setEmployeeDetails(prevState =>
            [...prevState, details]
        );
        e.preventDefault();
        setDetails(initialValue)
        setAdded(true);
    }
    
    return (
        
        <div className="addEmployee">
            <h2>Add Employee Details</h2>
            <div>
                {added?
                <div>
                <h4 className='successMessage'>New Employee added <span><Link to="/showEmployee">Show</Link></span></h4>
                
                </div>
                :''}
                
            </div>
            <form className="addEmployee-form" onSubmit={handleSubmit}>
                <label>
                    EmployeeId
                    <input type="text" name="employeeId" value={details.employeeId} required
                    onChange={handleChange}/>
                </label>
                <label>First Name
                    <input type="text" name="firstName" value={details.firstName} 
                    onChange={handleChange}/>
                </label>
                <label>Last Name
                    <input type="text" name="lastName" value={details.lastName} 
                    onChange={handleChange}/>
                </label>
                <label>Designation
                    <input type="text" name="designation" value={details.designation} 
                    onChange={handleChange}/>
                </label>
                <label>Location
                    <input type="text" name="location" value={details.location} 
                    onChange={handleChange}/>
                </label>
                <div className='submit'>
                <input type="submit" value="Add"/>
                </div>
            </form>
            
        </div>
    );
}

export default AddEmployee;
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../Context";
import './AddEmployee.css';

function EditEmployee(){
   
    const {details, setDetails, employeeDetails, setEmployeeDetails} = 
    useContext(Context);
    
    let params = useParams();

    const navigate = useNavigate();

    let current = employeeDetails.filter(obj => {
        return obj.employeeId === params.employeeId;
    })
    useEffect(()=>{
        console.log(current[0]);
        setDetails(current[0])
    },[])

    const handleChange = (e) => {
        setDetails({...details, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        setEmployeeDetails(current =>
            current.filter(detail => {
                return detail.employeeId !== params.employeeId;
        }))
        setEmployeeDetails(prevState =>
            [...prevState, details]
        );
        navigate('/showEmployee')
        e.preventDefault();
    }

    return(
        <div>
            <hr/>
            <h2>Edit Details</h2>
            <form className="editEmployee" onSubmit={handleSubmit}>
                <label>
                EmployeeId:
                    <input type="text" name="employeeId" value={details.employeeId}
                    onChange={handleChange}/>
                </label>
                <label>
                    First Name:
                   <input type="text" name="firstName" value={details.firstName}
                   onChange={handleChange}/>
                </label>
                <label>
                    Last Name:
                   <input type="text" name="lastName" value={details.lastName}
                   onChange={handleChange}/>
                </label>
                <label>
                    Designation:
                   <input type="text" name="designation" value={details.designation}
                   onChange={handleChange}/>
                </label>
                <label>
                    Location:
                   <input type="text" name="location" value={details.location}
                   onChange={handleChange}/>
                </label>
                <input type="submit" value="Save"/>
            </form>
        </div>
    );
}

export default EditEmployee;
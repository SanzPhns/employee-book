import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    
        const initialValue = {
            "employeeId": '',
            "firstName": '',
            "lastName": '',
            'designation': '',
            "location": ''
        }
    
        const [details, setDetails] = useState(initialValue)
        const [employeeDetails, setEmployeeDetails] = useState([]) 
  
    return (
        <Context.Provider value={{ details, setDetails, employeeDetails, setEmployeeDetails}}>
            {children}
        </Context.Provider>
    );
};

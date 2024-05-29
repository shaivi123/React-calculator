import React, { Fragment, useContext, useEffect, useState,  } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, useParams  } from "react-router-dom";

export const EditEmployee = (props) => {
    const { employees, updateEmployee } = useContext(GlobalContext);
    const [ selectedUser, setSelectedUser ] = useState({id: null,  name: '', location: '', designation: '' });
    const {id} = useParams();
    let history = useHistory();


    const onInputChange = (userKey, value) => {
        setSelectedUser({...selectedUser, [userKey]: value});
    };

    useEffect(()=>{
      const employeeId = parseInt(id);
      const selectedEmployee = employees.find(emp => emp.id === employeeId);
      if(selectedEmployee){
        setSelectedUser(selectedEmployee);
      }
    },[id, employees]);

    

    if(!selectedUser || !selectedUser.id){
        return <div>No data found</div>
    }

    const onSubmit = e =>{
        e.preventDefault();
        updateEmployee(selectedUser);
        history.goBack('/');
    }

    return (
       <Fragment>
        <div className="w-full max-w-sm container mt-20 mx-auto">
            <form onSubmit={onSubmit}>
                <div className="w-full mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                        Name of employee
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.name} onChange={(e) => onInputChange('name', e.target.value)} type="text" placeholder="Enter name" />
                </div>
                <div className="w-full  mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.location} onChange={(e) => onInputChange('location', e.target.value)} type="text" placeholder="Enter location" />
                </div>
                <div className="w-full  mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                        Designation
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.designation} onChange={(e) => onInputChange('designation', e.target.value)} type="text" placeholder="Enter designation" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                        Edit Employee
                    </button>
                </div>
                <div className="text-center mt-4 text-gray-500"><a href='/'>Cancel</a></div>
            </form>
        </div>
       </Fragment>
    )
}

import React, { Fragment, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";

export const AddEmployee = () => {
    const [ name, setName ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ designation, setDesignation ] = useState('');
    const { addEmployee } = useContext(GlobalContext);
    let history = useHistory();
    

    const handleName =(event) =>{
        setName(event.target.value);
    }; 
    const handleLocation = (event) => {
        setLocation(event.target.value);
    };
    const handleDesignation = (event) => {
        setDesignation(event.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        const data = {
            name: name,
            location: location,
            designation: designation
        };
        addEmployee(data);
        history.goBack("/");
    }
    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name Of Employee
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={name} onChange={handleName} type="text" placeholder="Enter name" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={location} onChange={handleLocation} type="text" placeholder="Enter location" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                            Designation
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" value={designation} onChange={handleDesignation} type="text" placeholder="Enter designation" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add Employee
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><a href="/">
                        Cancel</a>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

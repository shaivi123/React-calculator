import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";


const initialState = {
    employees: []
}


export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(()=>{
         async function fetchEmployee(){
            try{
                const response = await axios.get(`http://localhost:8085/api/getAll`);
                dispatch({
                    type: 'SET_EMPLOYEES',
                    payload: response.data
                });
            }catch(error){
                console.error("Error fetching employees: ", error);
            }
         }
         fetchEmployee();
    },[]);

   async function removeEmployee(id) {
    try{
        await axios.delete(`http://localhost:8085/api/removeEmp/${id}`);
        dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: id
        });
    }catch(error){
        console.error("Error removing employee: ", error);
    }
       
    };

    async function addEmployee(employee) {
        try{
           const response = await axios.post(`http://localhost:8085/api/addEmp`, employee,{
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            dispatch({
                type: 'ADD_EMPLOYEE',
                payload: response.data
            });
        }catch(error){
            console.error("Error adding employee: ", error);
        }
    };

    async function updateEmployee(employees) {
        const { id } = employees;
        try{
           const response =  await axios.put(`http://localhost:8085/api/updateEmp/${id}`, employees, {
                headers: {
                    'Content-Type': 'application/json'
                } 
            });
            dispatch({
                type: 'EDIT_EMPLOYEE',
                payload: response.data
            });
        } catch(error){
            console.error("Error updating employee: ",error);
        }
    };

    return (<GlobalContext.Provider value={{
        employees: state.employees,
        removeEmployee,
        addEmployee,
        updateEmployee
    }}>
        {children}
    </GlobalContext.Provider>);
}
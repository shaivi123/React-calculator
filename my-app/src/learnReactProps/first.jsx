import React, { useState } from "react";
import { Box } from '@mui/material';
import "./first.css";
import FetchData from './fetchData';


const First = () => {
    const [name, setName] = useState('');

    const name1 = ["Rockey", "Roshel", "Rimmi"];

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted!! " + name);
    }
    return (
        <div className="heading">
            <form onSubmit={handleSubmit}>
                <Box className="box" p={1}>
                    <label>Please give name
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    </label>
                    <FetchData name1={name1}/>
                </Box>
            </form>
           
        </div>
    )
}

export default First;
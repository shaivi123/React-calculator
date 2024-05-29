import React from "react";

const FetchData = (props) => {
    return(
        <div>
            <u>
            {props.name1.map((user, index) => (
                <li key={index}>{user}</li>
            ))}
            </u>
        </div>
    )
}
export default FetchData;
import React, { useState } from "react";
import "./app.css";

const Calculator = () => {
    const [inputValue, setInputValue] = useState('');
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState(null);

    const numbers = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "*"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "=", "X"],
    ];

    const numHandle = (item) => {
        if (typeof item === 'number' || item === '.') {
            setInputValue(prevValue => prevValue + item);
        }
        
        else if (item === "C") {
            setInputValue('');
            setPreviousValue('');
            setOperator(null);
        } 
        
        else if (item === "+-") {
            setInputValue(prevValue => prevValue ? String(-parseFloat(prevValue)) : '');
        } 
        
        else if (item === "%") {
            setInputValue(prevValue => prevValue ? String(parseFloat(prevValue) / 100) : '');
        }  
        
        else if (["+", "-", "*", "/"].includes(item)) {
            setPreviousValue(inputValue);
            setInputValue('');
            setOperator(item);
        } 
        
        else if (item === "=") {
            if (operator && previousValue) {
                let result;
                const previous = parseFloat(previousValue);
                const current = parseFloat(inputValue);

                switch (operator) {
                    case "+":
                        result = previous + current;
                        break;
                    case "-":
                        result = previous - current;
                        break;
                    case "*":
                        result = previous * current;
                        break;
                    case "/":
                        result = previous / current;
                        break;
                    default:
                        break;
                }

                setInputValue(String((result % 1 !== 0) ? result.toFixed(2) : result));
                setPreviousValue('');
                setOperator(null);
            }
        } 
        
        else if (item === "X") {
            setInputValue(prevValue => prevValue.slice(0, -1));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Calculator</h2>
                <div className="calculator">
                    <label>
                        <input type="text" name="myInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)} readOnly />
                    </label>
                    {numbers.map((row, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {row.map((item, itemIndex) => (
                                <button key={itemIndex} className="button" onClick={() => numHandle(item)}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default Calculator;

import React, { useState } from 'react'

export const Counter = () => {
    
    const [counter, setCounter] = useState(0);

    const handleIncrement = (value:number = 1):void => {
        setCounter(counter + value);
    }

    return (
        <div className='mt-5'>
            <h3>Counter: useCounter</h3>
            <span>Valor: {counter}</span>
            <br />
            <button 
                className='btn btn-outline-primary mt-2'
                onClick={() => handleIncrement(1)}
            >
                +1
            </button>

            <button 
                className='btn btn-outline-primary mt-2'
                onClick={() => handleIncrement(2)}
            >
                +2
            </button>

            <button
                className='btn btn-outline-danger mt-2'
                onClick={() => setCounter(0)}
            >
                Reset
            </button>
        </div>
    )
}

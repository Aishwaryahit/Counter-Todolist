import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <div className='container'>
            <h1>Simple counter component that increments and decrements a value using useState.</h1>
             {/* <p>Count: {number}</p>  */}
             <input
                id="num"
                name="numCount"
                placeholder='Enter the Number'
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            /> 
            <div className='btn'>
                <button onClick={() => setNumber(number + 1)}>
                    Increment
                </button>
                <button onClick={() => setNumber(number - 1)}>
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Counter;

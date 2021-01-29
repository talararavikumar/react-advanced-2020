import React, { useState } from 'react';

function UseStateObject() {
    const [Person, setPerson] = useState({ name: 'ravi', age: 25, message: 'Welcome to React' });

    const updateMessage = () => {
        setPerson({ ...Person, message: 'good Night' });
    }
    return (
        <>
            <div>{Person.name}</div>
            <div>{Person.age}</div>
            <div>{Person.message}</div>
            <button className='btn' onClick={() => updateMessage()}>update</button>
        </>
    )
}
export default UseStateObject

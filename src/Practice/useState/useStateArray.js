import React, { useState } from 'react';
import { data } from '../../data'

const UseStateArray = () => {

    const [people, setPeople] = useState(data);

    const removeItem = (id) =>{
        const tempArray = people.filter(item => item.id !== id);
        setPeople(tempArray);
    }
    return (
        <div>
            {people.map((person) => {
                const { id, name } = person;
                return (<div key={id} className='item'>
                    <h4>{name}</h4>
                    <button onClick={() => removeItem(id)}>delete</button>
                </div>)
            })}
            <button className='btn' onClick={() => setPeople([])}>Clear</button>
        </div>
    )
}

export default UseStateArray;



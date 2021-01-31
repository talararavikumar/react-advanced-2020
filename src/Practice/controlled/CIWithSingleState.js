import React, { useState } from 'react'

const CIWithSingleState = () => {

    const [person, setPerson] = useState({name:'',age:'',email:''})
    const [people, setPeople] = useState([]);

    const handleChange= (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]:value})
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();

        if(person.name && person.email && person.age){
            setPeople([...people , {id:new Date().toString(),...person}])
        }
    }

    return (
        <>
            <article>
                <form onSubmit={handleSubmitForm} className='form'>
                    <div className="form-control">
                        <label htmlFor="name">Name :</label>
                        <input name="name" value={person.name} onChange={(e) => handleChange(e)}></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email :</label>
                        <input name="email" value={person.email} onChange={(e) => handleChange(e)}></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Age :</label>
                        <input name="age" value={person.age} onChange={(e) => handleChange(e)}></input>
                    </div>
                    <button type='submit' className='btn' onClick={handleSubmitForm}>Add person</button>

                </form>
                {
                    people.map((person, index) => {
                        const { id, name, email, age } = person;
                        return <div className="item" key={id}>
                            <h4>{name}</h4>
                            <p>{email}</p>
                            <p>{age}</p>
                        </div>
                    })
                }
            </article>
        </>
    )
}

export default CIWithSingleState

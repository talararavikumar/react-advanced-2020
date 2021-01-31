import React, { useState } from 'react'

const ControlledInputs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([])

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (name && email) {
            setPeople((people) => [...people, { id: new Date().toString(), name, email }]);
        }
    }

    return (
        <>
            <article>
                <form onSubmit={handleSubmitForm} className='form'>
                    <div className="form-control">
                        <label htmlFor="name">Name :</label>
                        <input name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="name">Email :</label>
                        <input name="name" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <button type='submit' className='btn' onClick={handleSubmitForm}>Add person</button>

                </form>
                {
                    people.map((person, index) => {
                        const { id, name, email } = person;
                        return <div className="item" key={id}>
                            <h4>{name}</h4>
                            <p>{email}</p>
                        </div>
                    })
                }
            </article>
        </>
    )
}

export default ControlledInputs

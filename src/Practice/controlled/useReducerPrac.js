import React , {useReducer, useState}from 'react'

const initialState = {
    isModelOpen: false,
    people: [],
    sModelMessage: 'welcome to redux practice'
}


const reducer = (state, action) => {

    switch (action.type) {
        case 'Add_Item':
            {
                const newPeople = [...state.people, action.payload];
                return {
                    ...state,
                    people: newPeople,
                    isModelOpen: true,
                    sModelMessage: 'Item Added'
                }
            }
            break;
        case 'Remove_Item':
            {
                const newPeople =
                    state.people.filter(person =>{ 
                        console.log(person);
                        console.log(action.payload.id);

                        return person.id !== action.payload});
                return {
                    ...state,
                    people: newPeople,
                    isModelOpen: true,
                    sModelMessage: 'Item Removed'
                }
            }
            break;
        case 'Close_Modal':
            {
                return {
                    ...state,
                    isModelOpen: false
                }
            }
            break;
        default:
            break;
    }
}

export const UseReducerPrac = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [name, setname] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = { id: new Date().getTime().toString(), name };
            dispatch({ type: 'Add_Item', payload: newItem });
            setname('');
        } else {
            dispatch({ type: 'Enter Name' });
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input value={name} type = "text"
                onChange={(e)=>setname(e.target.value)}/>
                <button type="submit" className="btn">Add
                </button>
            </form>
            {
                state.people.map((person) => {
                    return(
                    <div key={person.id} className="item">
                        <h4> {person.name}</h4>
                        <button type="button" onClick={() => {
                            dispatch({ type: 'Remove_Item', payload: person.id });
                        }}>Remove</button>
                    </div>);
                })
            }
        </>
    )
}


export default UseReducerPrac;

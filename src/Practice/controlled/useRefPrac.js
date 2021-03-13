import React,{useRef,useEffect} from 'react'

const UseRefPrac = () => {

    const refInpuContianer = useRef(null);
    const refDivContainer = useRef(null);

    useEffect(() => {
        refInpuContianer.current.focus();
        console.log(refInpuContianer.current);

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('test');
        console.log(refInpuContianer.current.value);
        console.log(refDivContainer.current);

    }

    console.log(refInpuContianer);
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                <input ref={refInpuContianer} type="text"/>
                <button type="submit">submit</button>
                </div>
            </form>
            <div ref = {refDivContainer}>test ability</div>
        </>
    )
}

export default UseRefPrac;
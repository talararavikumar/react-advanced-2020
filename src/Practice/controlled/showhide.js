import React, {useState , useEffect} from 'react'

const ShowHide = () => {
    const [show, setshow] = useState(false);
    return (
        <>
          <button    type="button" className="btn" onClick={()=>setshow(!show)}>show/hide</button>
          {show && <Item />}
        </>
    )
}


const Item = () => {

    const [width, setwidth] = useState(window.innerWidth);
    const checkSize = () => {
        setwidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize');
        }
    }, [])

    return (
        <div>
            width : {width}
        </div>
    )
}

export default ShowHide
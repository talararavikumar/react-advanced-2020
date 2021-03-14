import React , {useEffect} from 'react'

const Modal = ({sMessage,closeModal} ) => {

    useEffect(() => {
        setTimeout(()=>{
           closeModal();
        },7000)
    }, [])
    return (
        <div className="Modal">
            <div>{sMessage}</div>
        </div>
    )
}

export default Modal

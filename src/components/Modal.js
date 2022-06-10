function Modal(props){

    const cancelHandler = function(){
        props.onCancel();
    }
    
    const confirmHandler = function(){
        props.onConfirm();
        document.getElementById(props.todoID).remove();
    }

    return (
        <div className="modal">
            <p>Are you sure</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    );
}

export default Modal;
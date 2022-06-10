import {useState} from 'react';
import Modal from './Modal'
import Backdrop from './Backdrop';

function Todo(props) {
    // useState() return array of 2 elements:
    // first one is the current state snapshot
    // second one is the function to change the state value (not by assigning the first one)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteHandler = function(){
        setModalIsOpen(true);
    };

    const closeModalHandler = function(){
        setModalIsOpen(false);
    };

    return (
        <div className='card' id={props.text}>
          <h2>{props.text}</h2>
          <div className='actions'>
            <button className='btn' onClick={deleteHandler}>
              Delete
            </button>
          </div>
          {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} todoID={props.text}/> : null}
          {modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null}
        </div>
    );
}

export default Todo;
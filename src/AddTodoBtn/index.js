import './AddTodoBtn.css';
import { TodoContext } from '../Context';
import React from 'react';

function AddTodoBtn() {
    const {
        openModal,
        setOpemModal
    } = React.useContext(TodoContext);
    return (
        <button
            className='addTodoBtn'
            onClick={
                () => {
                    setOpemModal(!openModal);
                }
            }
        >+</button>
    );
}

export { AddTodoBtn };
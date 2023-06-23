import './AddTodoModal.css'
import React from 'react';
import { TodoContext } from '../Context';

function AddTodoModal() {
    const {
        addTodo,
        setOpemModal
    } = React.useContext(TodoContext);

    const [todoValue, setTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(todoValue);
        setOpemModal(false)
    }

    const onClose = () => {
        setOpemModal(false)
    }

    const onChange = (event) => {
        setTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='modalMask'>
                <div className='modalCard'>
                    <i
                        className='modalClose fa-solid fa-square-xmark'
                        onClick={
                            onClose
                        }
                    ></i>
                    <label className='modalLabel'> ¿Que pendiente tenemos?</label>
                    <input
                        className='modalInput'
                        placeholder='Escribe un nuevo pendiente'
                        required
                        value={todoValue}
                        onChange={
                            onChange
                        }
                    ></input>
                    <button
                        type='submit'
                        className='modalBtn'
                    >Agregar</button>
                </div>
            </div>
        </form>
    );
}

export { AddTodoModal };
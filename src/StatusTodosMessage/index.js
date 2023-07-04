import React from 'react';
import './StatusTodosMessage.css';
import { TodoContext } from '../Context';

function StatusTodosMessage(props) {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);

    const showMessageCompleted = () => {
        const completedMessage = document.querySelector('.satusHeader-message-completed');
        const normalMessage = document.querySelector('.satusHeader-message');
        if (props.allCompleted()) {
            if (normalMessage != null) {
                completedMessage.style.display = "block";
                normalMessage.style.display = "none";
            }
        } else {
            if (normalMessage != null) {
                completedMessage.style.display = "none";
                normalMessage.style.display = "block";
            }
        }
    }

    const progress = () => {
        let x;
        totalTodos === 0 ? x = 0 : (x = ((completedTodos * 100) / totalTodos));
        return x;
    }
    return (
        <header className='satusHeader'>
            {showMessageCompleted()}
            <h1 className='satusHeader-message-completed'>¡FELICIDADES! <p>HAS COMPLETADO TODAS TUS ACTIVIDADES</p></h1>
            <h2 className='satusHeader-message'>ACTIVIDADES REALIZADAS</h2>
            <div className='satusHeader-progress'>
                <h2 className='satusHeader-progress-count'>{completedTodos} / {totalTodos}</h2>
                <div className='satusHeader-progress_inner' style={{ width: `${progress()}%` }}></div>
            </div>
            {/* <progress className='satusHeader-progress' id="file" max={`${totalTodos}`} value={`${completedTodos}`}> {`${completedTodos}$`} </progress> */}
        </header>
    );
}

export { StatusTodosMessage };
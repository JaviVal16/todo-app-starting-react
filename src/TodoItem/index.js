import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className={`todoItem ${props.completed && "todoItem-completed"}`}>
            <i
                className={`fa-solid fa-square-check ${props.completed && "check-completed"} `}
                onClick={props.onComplete}
            ></i>
            <p className='todoItem-text' >{props.text}</p>
            <i
                className="fa-solid fa-square-xmark"
                onClick={props.delete}
            ></i>
        </li>
    );
}

export { TodoItem };
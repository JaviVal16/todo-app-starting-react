import './AlertCompleted.css'

function AlertCompleted(props) {
    // console.log(props.allCompleted);
    let className = 'fa-solid fa-square-xmark'
    if (props.allCompleted) {
        return (
            <div className="popUpCompleted">
                <h2 className='popUpCompleted-h2' >¡¡¡FELICIDADES HAZ COMPLETADO TODAS TUS TAREAS!!!</h2>
                <i
                    className={className}
                ></i>
            </div>
        );
    }
}

export { AlertCompleted };
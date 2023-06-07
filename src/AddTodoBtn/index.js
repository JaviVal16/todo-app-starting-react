import './AddTodoBtn.css';

function AddTodoBtn() {
    return (
        <button
            className='addTodoBtn'
            onClick={
                (event) => {
                    console.log('Haz dado click')
                    console.log(event.target)
                }
            }
        >+</button>
    );
}

export { AddTodoBtn };
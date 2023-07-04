import { StatusTodosMessage } from '../StatusTodosMessage';
import { TodosSearchBox } from '../TodosSearchBox';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { AddTodoBtn } from '../AddTodoBtn';
import { LoadingTodos } from '../LoadingTodos';
import { LoadingError } from '../LoadingError';
import { FirstTodo } from '../FirstTodo';
import { TodoContext } from '../Context';
import { Modal } from '../Modal';
import { AddTodoModal } from '../AddTodoModal';
import React from 'react';

function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        todoCompleted,
        todoDeleted,
        openModal,
        totalTodos,
        allCompleted
    } = React.useContext(TodoContext);
    return (
        <>

            {(!loading && totalTodos !== 0) && <StatusTodosMessage
                allCompleted={() => allCompleted()}
            />}

            {(!loading && totalTodos !== 0) && <TodosSearchBox />}


            <TodoList>
                {loading && <LoadingTodos />}
                {error && <LoadingError />}
                {(!loading && totalTodos === 0) && <FirstTodo />}
                {searchedTodos.map(element => (
                    <TodoItem
                        key={element.text}
                        text={element.text}
                        completed={element.completed}
                        onComplete={() => todoCompleted(element.text)}
                        delete={() => todoDeleted(element.text)}
                    />
                ))}
            </TodoList>

            {!loading && <AddTodoBtn />}



            {openModal && (
                <Modal>
                    <AddTodoModal />
                </Modal>
            )}
        </>
    );

}

export { AppUI }; 
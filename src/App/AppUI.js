import { StatusTodosMessage } from '../StatusTodosMessage';
import { TodosSearchBox } from '../TodosSearchBox';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { AddTodoBtn } from '../AddTodoBtn';
import { AlertCompleted } from '../AlertCompleted';
import { LoadingTodos } from '../LoadingTodos';
import { LoadingError } from '../LoadingError';
import { FirstTodo } from '../FirstTodo';
import { TodoContext } from '../Context';
import { Modal } from '../Modal';
import React from 'react';

function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        todoCompleted,
        todoDeleted,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <>
            <StatusTodosMessage />
            <TodosSearchBox />

            <TodoList>
                {loading && <LoadingTodos />}
                {error && <LoadingError />}
                {(!loading && searchedTodos.length === 0) && <FirstTodo />}
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

            <AlertCompleted />

            <AddTodoBtn />

            {openModal && (
                <Modal>
                    Lograste teletrasportar el texto
                </Modal>
            )}
        </>
    );

}

export { AppUI }; 
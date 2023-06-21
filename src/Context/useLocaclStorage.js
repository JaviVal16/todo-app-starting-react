import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {

            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2100);
    }, [initialValue, itemName]);


    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {
        item,
        saveItem,
        loading,
        error
    };

}

export { useLocalStorage };

// const exampleTodos = [
//   { text: 'Completar curso React', completed: true },
//   { text: 'Lavar los trastes', completed: false },
//   { text: 'Hacer ejercicio', completed: false },
//   { text: 'Hacer un pastel de platano', completed: true },
//   { text: 'Sacar a pasear a Nutela', completed: false },
//   { text: 'Bañarse', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(exampleTodos));
// localStorage.removeItem('TODOS_V1');
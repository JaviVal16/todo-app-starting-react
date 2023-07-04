import React from 'react';
import './FirstTodo.css';
import { IconGallery } from './IconGallery';

function FirstTodo() {

    return (
        <div className='messageDiv'>
            <h2 className='messageDiv-Nothing'>No exisite ninguna actividad pendiente</h2>
            <span className='icon-span-nothing'>
                <IconGallery
                    type="nothing"
                />
            </span>
            <div className='ondaBtn'></div>
            <h2 className='messageDiv-Clic'>Para comenzar agrega una nueva actividad dando clic en el botón</h2>
            <span className='icon-span-flecha'>
                <IconGallery
                    type="flecha"
                />
            </span>
        </div>
    );
}

export { FirstTodo };
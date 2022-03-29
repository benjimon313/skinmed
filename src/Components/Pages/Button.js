import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom';

export function Button () {
    return(
        <Link to='iniciar-sesion'>
            <button className='btn'>
                Cerrar Sesion
            </button>
        </Link>
    )
}
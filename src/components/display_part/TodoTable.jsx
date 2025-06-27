import React from 'react';
import './styles/accessory.css'

const TodoTable = ({ children }) => {
    return(
        <div className='bg-container'>
            <div className="white-bg">
                {children}
            </div>
        </div>
    )
}

export default TodoTable;

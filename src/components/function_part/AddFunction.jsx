import React from 'react';
import './styles/function.css';

class AddFunction extends React.Component {
    render(){
        return(
        <div className='add-button-container'>
                <button type='button' onClick={this.props.onClick} className='add-button'>
                    Click me to add new task!
                </button>
            </div>
        )
    }
}
export default AddFunction;
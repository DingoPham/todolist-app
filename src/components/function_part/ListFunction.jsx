import React from 'react';
import './styles/function.css';
import InteractTask from '../function_part/InteractTask';

class ListFunction extends React.Component {
    render(){
        return(
            <div className='list-gap'>
                {this.props.texts?.map((text, index) => (
                    <p key={index} style={{fontSize: '20px', marginRight: '10px'}}>
                        {text}
                        <InteractTask />
                        <hr/>
                    </p>
                ))}
            </div>
        )
    }
}

export default ListFunction;
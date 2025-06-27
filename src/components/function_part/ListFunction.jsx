import React from 'react';
import './styles/function.css';

class ListFunction extends React.Component {
    render(){
        return(
            <div className='list-gap'>
                {this.props.texts?.map((text, index) => (
                    <p key={index} style={{fontSize: '20px'}}>
                        {text}
                        <hr/>
                    </p>
                ))}
            </div>
        )
    }
}

export default ListFunction;
import React from 'react';
import './styles/accessory.css';
import AddFunction from '../function_part/AddFunction';
import ListFunction from '../function_part/ListFunction';
import InputFunction from '../function_part/InputFunction';
class ListForm extends React.Component {
    state = {
        texts: [],
        showInput: false,
        curruntText: '',
    };
    addInput = () => {
        this.setState({
            showInput: true,
        });
    };
    saveInput = () => {
        if(this.state.curruntText.trim()){
            this.setState(prevState => ({
                texts: [...prevState.texts, prevState.curruntText],
                curruntText: '',
                showInput: false,
            }));
        }
    };
    changeInput = (e) => {
        this.setState({
            curruntText: e.target.value,
        });
    };
    render() {
        return (
            <form>
                <AddFunction onClick={this.addInput}/>

                {this.state.showInput && (
                    <InputFunction
                        value={this.state.curruntText}
                        onChange={this.changeInput}
                        onSave={this.saveInput}
                    />
                )}
                
                <div className='list-container'>
                    <div className='list' style={{overflowY: 'scroll', border: '1px solid #ccc'}}>
                        <ListFunction texts={this.state.texts}/>
                    </div>
                </div>
            </form>
        )
    }
}

export default ListForm;
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
    }
    constEnterKey = (event) => {
        if (event.key === 'Enter' && this.state.showInput) {
        }
    };
    addInput = () => {
        this.setState({
            showInput: true,
        });
    };
    saveInput = () => {
        if (this.state.curruntText.trim()) {
            this.setState((prevState) => ({
                texts: [...prevState.texts, prevState.curruntText],
                showInput: false,
                curruntText: '',
            }));
        }
    }
    changeInput = (event) => {
        this.setState({
            curruntText: event.target.value,
        });
    }
    cancelInput = () => {
        this.setState({
            showInput: false,
            curruntText: '',
        });
    }

    render() {
        return (
            <form>
                <AddFunction onClick={this.addInput}/>

                <div className='list-container'>
                    {this.state.showInput && (
                        <InputFunction
                            value={this.state.curruntText}
                            onChange={this.changeInput}
                            onSave={this.saveInput}
                            onCancel={this.cancelInput}
                        />
                    )}

                    <div className='list custom-scrollbar'>
                        <ListFunction texts={this.state.texts}/>
                    </div>
                </div>
            </form>
        )
    }
}

export default ListForm;
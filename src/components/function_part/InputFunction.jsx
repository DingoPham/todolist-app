import React from "react";

class InputFunction extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: props.editingList ? props.editingList.text : ' '
        }
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.submitForm()
    };
    handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            this.submitForm();
        }
    }
    submitForm = () =>{
        if (this.state.inputValue.trim()) {
            if (this.props.editingList) {
                this.props.updateList(this.props.editingList.id, this.state.inputValue);
            } else {
                this.props.addList(this.state.inputValue);
            }
            this.setState({ inputValue: '' });
            this.props.hideInput();
        }
    }
    render(){
        return( 
            <form className="input-display" onClick={this.handleSubmit}>
                <input
                    onKeyPress={this.handleKeyDown}
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    className="task-input"
                    type="text"
                    placeholder="Type your task here..."
                    autoFocus
                />
                <button type="button" className="add-button-2" >
                    Save
                </button>
                <button type="button" className="add-button-2" onClick={this.props.hideInput}>
                    Cancel
                </button>
            </form>
        )
    }
}

export default InputFunction;
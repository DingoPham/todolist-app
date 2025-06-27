import React from "react";

class InputFunction extends React.Component {
    render(){
        return( 
            <div>
                <input
                    className="task-input"
                    type="text"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    placeholder="Type your task here..."
                />
                <button type="button" className="add-button-2" onClick={this.props.onSave}>
                    Save
                </button>
                <button type="button" className="add-button-2" onClick={this.props.onCancel}>
                    Cancel
                </button>
            </div>
        )
    }
}

export default InputFunction;
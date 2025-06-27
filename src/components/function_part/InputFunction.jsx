import React from "react";

class InputFunction extends React.Component {
    render(){
        return(
            <div>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    placeholder="Nhập task mới"
                />
                <button type="button" className="add-button" onClick={this.props.onSave}>
                    Lưu 
                </button>
            </div>
        )
    }
}

export default InputFunction;
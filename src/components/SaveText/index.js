import React, {Component} from "react";

export default class SaveText extends Component {
    state ={
        text: this.props.text
    };

    changeText = (event) => {
        this.setState({text: event.target.value});
    }
    save = () => {
        const {save, listId, taskId} = this.props;
        if(taskId){
            save(listId,taskId,this.state.text)
        }
        save(listId,this.state.text);
    }

    render(){
        return(
            <div className ="textBlock">
                <input type="text" placeholder="please enter text" onChange={this.changeText} value = {this.state.text}/>
                <button onClick={this.save}>Save</button>
            </div>
        );
    }
}

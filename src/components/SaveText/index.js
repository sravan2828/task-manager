import React, {Component} from "react";
import styles from "./styles.module.css";

export default class SaveText extends Component {
    state ={
        text: this.props.text
    };

    //handle text box change events
    changeText = (event) => {
        this.setState({text: event.target.value});
    }

    save = () => {
        const {save, listId, taskId} = this.props;
        //for update task name use the below method params else use the update list name params
        if(taskId){
            save(listId,taskId,this.state.text)
        } else{
            save(listId,this.state.text);
        }
        
    }

    render(){
        return(
            <div className ="textBlock">
                <input type="text" className={styles.text} placeholder="please enter text" onChange={this.changeText} value = {this.state.text}/>
                <button onClick={this.save} className={styles.saveButton}>Save</button>
            </div>
        );
    }
}

import React, {Component} from "react";
import Task from "../components/Task";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {updateTaskName, deleteTask, moveTask} from '../redux/Actions';

class TaskContainer extends Component {
    state ={
        editText: this.props.task.description.length <= 0 //show edit text if description is empty
    };

    saveTaskName = (listId, taskId,text) => {
        if(text && text.length > 0){
          this.props.updateTaskName({listId, taskId, description:text});
          this.setState({editText:false});
        }
    }

    showEditText = () => {
        this.setState({editText:true});
    }
    
    render() {
        return(
            <Task 
                {...this.props}
                editText={this.state.editText}
                saveTaskName={this.saveTaskName}
                showEditText={this.showEditText}
            />
        );
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        updateTaskName,
        deleteTask,
        moveTask
    }, dispatch)
);

export default connect(null,mapDispatchToProps)(TaskContainer);
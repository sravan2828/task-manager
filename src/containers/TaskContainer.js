import React, {Component} from "react";
import Task from "../components/Task";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {updateTaskName} from '../redux/Actions';

class TaskContainer extends Component {
    saveTaskName = (listId, taskId,text) =>{
        if(text && text.length > 0){
          this.props.updateTaskName({listId, taskId, description:text});
        }
    }
    render() {
        return<Task {...this.props} saveTaskName={this.saveTaskName}/>;
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        updateTaskName,
    }, dispatch)
);

export default connect(null,mapDispatchToProps)(TaskContainer);
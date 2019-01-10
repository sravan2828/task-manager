import React, {Component} from "react";
import Task from "../components/Task";
class TaskContainer extends Component {
    render() {
        return<Task {...this.props.task}/>;
    }
}

export default TaskContainer;
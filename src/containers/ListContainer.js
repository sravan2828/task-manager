import React, {Component, Fragment} from "react";
import List from "../components/List";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {createTask} from "../redux/Actions";

class ListContainer extends Component{
    render(){
        return(
            <Fragment>
                {this.props.lists.map(list => <List list={list} createTask={this.props.createTask} key={list.id}/>)}
                
                {/* <List>
                    <Task priority="high" />
                    <Task priority="high" />
                    <Task priority="medium" />
                    <Task priority="low" />
                    <Task priority="low" />
                    <Task priority="high" />
                    <Task priority="low" />
                    <AddTask />
                </List>
                <List>
                    <Task priority="low" />
                    <Task priority="medium" />
                    <Task priority="high" />
                    <AddTask />
                </List>
                <List>
                    <Task priority="low" />
                    <Task priority="medium" />
                    <Task priority="high" />
                    <AddTask />
                </List>
                <List>
                    <Task priority="low" />
                    <Task priority="medium" />
                    <Task priority="high" />
                    <AddTask />
                </List>
                <List>
                    <Task priority="low" />
                    <Task priority="medium" />
                    <Task priority="high" />
                    <AddTask />
                </List> */}
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        createTask,
    }, dispatch)
  );

export default connect(mapDispatchToProps)(ListContainer);
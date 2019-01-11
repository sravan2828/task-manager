import React, {Component, Fragment} from "react";
import List from "../components/List";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {createTask, updateListName} from "../redux/Actions";

class ListContainer extends Component{
    
    render(){
        return(
            <Fragment>
                {this.props.lists.map(
                list => <List
                            list={list}
                            updateListName={this.props.updateListName}
                            key={list.id}
                            createTask= {this.props.createTask}
                        />
                )}
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        createTask,
        updateListName,
    }, dispatch)
);

export default connect(null,mapDispatchToProps)(ListContainer);
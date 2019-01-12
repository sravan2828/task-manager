import React,{Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from "../components/Board"
import {createList} from "../redux/Actions"
import uniqid from "uniqid";

// all the components which have redux actions are placed in containers
// components which only handle view and handling of interactions are placed in component folder
class BoardContainer extends Component{
    //create a new empty list
    createNewList = () => {
        const newList = {
			id: uniqid(),
			name: "",
			tasks:[]
        };
        this.props.createList(newList);
    }
    render() {
        return <Board {...this.props} createNewList={this.createNewList}/>;
    }
}

const mapStateToProps = (state) => {
    return state;
  };
  
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        createList,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
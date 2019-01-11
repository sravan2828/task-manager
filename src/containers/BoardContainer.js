import React,{Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from "../components/Board"
import {createList} from "../redux/Actions"
import uniqid from "uniqid";
class BoardContainer extends Component{
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
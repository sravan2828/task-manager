import React,{Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from "../components/Board"
import {createList} from "../redux/Actions"
class BoardContainer extends Component{
    render() {
        return <Board {...this.props} createList={this.props.createList}/>;
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
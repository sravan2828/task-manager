import React,{Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from "../components/Board"
import {createList} from "../redux/Actions"

//board container gets the state from the redux store and sends down to children.
class BoardContainer extends Component{
    render() {
        return <Board {...this.props} />;
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
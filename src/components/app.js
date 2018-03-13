import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './list.js';
import AddList from './add_list.js';
import AddCard from './add_card.js';
import { addList } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class App extends Component {
  renderLists() {
    return _.map(this.props.lists, list =>{
      return (
        <div className="list" key={list.id}>
          <h3>{list.listTitle}</h3>
        </div>
      )
    })
  }

  render() {
    console.log(this.props.lists);
    return (
      <div>
        <h1>To Do List Application</h1>
        <AddList/>
        <div className="lists-container">
          {this.renderLists()}
        </div>
        {/* <List /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { lists: state.lists };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addList: addList}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
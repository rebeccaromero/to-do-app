import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addList } from '../actions';
import { bindActionCreators } from 'redux';


class AddList extends Component {
  renderField(field) {
    return (
      <div>
        <input 
          type="text"
          placeholder="Add a list..." 
          value=""
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.addList(values.listTitle)
  }

  createList(e) {
    e.preventDefault();
    console.log(e.target.value);
    // this.props.addList(title)
    
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field 
              name="listTitle" 
              component={this.renderField}
            />
            <button className="btn btn-primary" type="submit">Add List</button>
        </form>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { lists: state.lists };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addList: addList}, dispatch);
};

export default reduxForm({
  form: 'AddNewList'
})(
  connect(null, mapDispatchToProps)(AddList)
);

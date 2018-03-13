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

  onSubmit(formData) {
    console.log(formData);
    addList(formData);
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
            <button type="submit">Add List</button>
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

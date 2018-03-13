import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class AddCard extends Component {
    renderField(field) {
        return (
          <div>
            <input 
              type="text"
              placeholder="Add a card" 
              value=""
              {...field.input}
            />
          </div>
        );
    }

    onSubmit(content) {
        this.props.addCard(content)
        console.log(content);
      }
    
    render() {
        const { handleSubmit } = this.props;
        return (
          <div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                  name="cardContent" 
                  component={this.renderField}
                />
                <button type="submit">Add Card</button>
            </form>
          </div>
        );
    }
}

export default reduxForm({
    form: 'AddNewCard'
})(AddCard);

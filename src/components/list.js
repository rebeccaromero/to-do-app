import React, { Component } from 'react';
import AddCard from './add_card.js';

export default class List extends Component {
    render() {
      return (
        <div>
            <h3>List Title</h3>
            <AddCard />
        </div>
      );
    }
  }
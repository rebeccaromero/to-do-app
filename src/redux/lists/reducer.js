// import { combineReducers } from 'redux';
import types from './types';
// import listTypes from '../cards/types';
// import { ADD_LIST } from '../actions';

const initialState = {
    lists: [],
    listId: 0

}
export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_LIST:
            console.log('test');
            return [...state, 
                {
                    id: listId++,
                    title: action.title,
                    cards: []
                }
            ];
        default: 
            return state;
    }
};

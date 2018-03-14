import { ADD_LIST } from '../actions';

const initialState = {
    lists: [],
    listCounter: 0

}
export default function(state = initialState, action) {
    console.log('reducer');
    switch (action.type) {
        case ADD_LIST:
            console.log('test');
            var newState = Object.assign({}, state);
            newState.lists.push({
                id: state.listCounter++,
                title: action.title,
                cards: []
            });
            return newState;
        default: 
            return state;
    }
};
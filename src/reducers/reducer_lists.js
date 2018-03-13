import { ADD_LIST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case ADD_LIST:
            return [...state, 
                {
                    id: action.id,
                    title: action.title,
                    cards: []
                }
            ];
        default: 
            return state;
    }
};

// const lists = 
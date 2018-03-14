import types from './types';



const addList = (title) => {
    console.log(title);
    return {
        type: ADD_LIST,
        title,
        cards: []
    }
}

export default {
    addList
};
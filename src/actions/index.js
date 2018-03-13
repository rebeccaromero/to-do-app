export const ADD_LIST = 'ADD_LIST';
export const ADD_CARD = 'ADD_CARD';

var listId = 0;

export function addList(title) {
    console.log(title);
    console.log(listId);
    return {
        type: ADD_LIST,
        id: listId++,
        title,
        cards: []
    }
}

export function addCard() {
    return {
        type: ADD_LIST,
        payload: data
    }
}

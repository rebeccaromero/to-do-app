export const ADD_LIST = 'ADD_LIST';
export const ADD_CARD = 'ADD_CARD';

var listCounter = 0;

export function addList(title) {
    console.log(title);
    console.log(listCounter);
    return {
        type: ADD_LIST,
        id: listCounter++,
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

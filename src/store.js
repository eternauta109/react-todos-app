import { createStore } from "redux";
const initTodos = [
    {
        name: "call my mum",
        dueDate: new Date().toLocaleDateString(),
        user_id: 1,
    },
    {
        name: "go to school",
        dueDate: new Date().toLocaleDateString(),
        user_id: 1,
    },
    {
        name: "go to the work fuck",
        dueDate: new Date().toLocaleDateString(),
        user_id: 1,
    },
];


const reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TODO':
            return [action.payload, ...state];

        case 'REMOVE_TODO':
            const arr = state.filter(item => item.name !== action.payload.name)
            return arr;
            
        default:
            return state;
    }
}

export const store = createStore(reducer, initTodos, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
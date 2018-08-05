import { Questions } from './data/Questions'; 

const initialState = {
    index: -1,
    score: 0,
    question: {},
    total: Questions.length
};

export const getQuestion = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_NEXT_QUESTION':
            return Object.assign({}, state, {
                index: (state.index + 1),
                question: Questions[state.index + 1],
            });
        default:
            return state;
    }
}

export const checkAnswer = (state= initialState, action = {}) => {
    switch (action.type) {
        case 'CHECK_ANSWER':
            console.log('checking answer: ', action.payload);
        default:
            return state;
    }
}
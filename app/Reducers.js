import { Questions } from './data/Questions'; 

const initialState = {
    index: -1,
    score: 0,
    question: {},
    total: Questions.length
};

export const questionReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_NEXT_QUESTION':
            return Object.assign({}, state, {
                index: (state.index + 1),
                question: Questions[state.index + 1],
            });
        case 'CHECK_ANSWER': 
            if ((action.payload + 1) === state.question.answer) {
                return Object.assign({}, state, {
                    score: (state.score + 1),
                    question: Object.assign({}, state.question, {result: 'correct'}) 
                });
            }
            else {
                return Object.assign({}, state, {
                    question: Object.assign({}, state.question, {result: 'wrong'})
                });
            }
        default:
            return state;
    }
}

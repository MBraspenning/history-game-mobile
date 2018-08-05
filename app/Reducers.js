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
            console.log(state);
        default:
            return state;
    }
}

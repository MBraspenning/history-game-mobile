import { Questions } from './data/Questions'; 

const initialState = {
    index: -1,
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
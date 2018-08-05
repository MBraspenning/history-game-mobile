export const getQuestion = () => ({
    type: 'GET_NEXT_QUESTION'
});

export const checkAnswer = (answer) => ({
    type: 'CHECK_ANSWER',
    payload: answer
});
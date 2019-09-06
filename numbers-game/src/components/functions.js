import constants from './game.constants';

export const reducer = (state, action) => {
    switch (action.type) {
        case constants.ADD:
            return { count: Math.ceil(state.count + action.value), attempts: state.attempts + 1 };
        case constants.SUBTRACT:
            return { count: Math.ceil(state.count - action.value), attempts: state.attempts + 1 };
        case constants.MULTIPLY:
            return { count: Math.ceil(state.count * action.value), attempts: state.attempts + 1 };
        case constants.DIVIDE:
            return { count: Math.ceil(state.count / action.value), attempts: state.attempts + 1 };
        default:
            return { count: 1, attempts: state.attempts + 1}
    }
};
export const getRandomInt = range => {
    range[0] = Math.ceil(range[0]);
    range[1] = Math.floor(range[1]);
    return Math.floor(Math.random() * (range[1] - range[0])) + range[0];
}
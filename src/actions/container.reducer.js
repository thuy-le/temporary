export const START_CONTAINER = 'START_CONTAINER';
export const initialStates = {
    loaded: false
};

export default (state = initialStates, action) => {
    switch (action.type) {
        case START_CONTAINER:
            return { loaded:true };
        default:
            return initialStates;
    }
}

// this funciton will flood to all reducers.
// React doesn't like returning undefine when the app boots up, so we make currentState = null
export default (currentState = null, action) => {
    switch(action.type) {
        case 'RESOURCE_SELECTED':
            return action.payload;

        default:
            // if the action is not concerned(no action), then do nothing, return same
            return currentState;
    }
}
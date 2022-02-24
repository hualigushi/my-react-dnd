import { BEGIN_DRAG, END_DRAG, HOVER } from '../actions/dragDrop'

const intialState = {
    clientOffset: {}
}
function reducer(state = intialState, action) {
    const { payload } = action
    switch (action.type) {
        case BEGIN_DRAG:
            return {
                clientOffset: payload.clientOffset
            }
        case HOVER:
            return {
                clientOffset: payload.clientOffset
            }
        case END_DRAG:
            return intialState
        default:
            return state
    }
}
export default reducer
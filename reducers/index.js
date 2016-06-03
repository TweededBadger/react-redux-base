import { combineReducers } from 'redux'

export const testReducer = (state = true, action = undefined) => {
    switch (action.type) {
        case 'SWITCH':
            return !state
        default:
            return state
    }
}

const appReducer = combineReducers({
    testReducer
})

export default appReducer
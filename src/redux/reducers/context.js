import { createActions, handleActions } from "redux-actions";

export const SET_INPUT_FOCUSED = "SET_INPUT_FOCUSED";

export const {
    setInputFocused,
} = createActions({
    [SET_INPUT_FOCUSED]: value => value,
})

const INITIAL_STATE = {
    isInputFocused: false,
}

export const context = handleActions({
    [SET_INPUT_FOCUSED]: (state ) => ({
        ...state,
    }),
}, INITIAL_STATE)
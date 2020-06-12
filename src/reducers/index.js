export default function (state, action) {
    switch (action.type) {
        case "SET_ACTIVE_SESSION":
            return {
                ...state,
                activeSession: action.payload
            }
        case "INCREASE_COUNTER":
            console.log(action.payload)
            const activeSession = action.payload.toLowerCase()
            return {
                ...state,
                [activeSession]: state[activeSession] + 1
            }
        case "DECREASE_COUNTER":
            const session = action.payload.toLowerCase()
            return {
                ...state,
                [session]: state[session] - 1
            }
        default:
            return state;
    }
}
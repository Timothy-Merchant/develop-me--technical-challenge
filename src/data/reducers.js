const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE_PLAYER": return { ...state, players: [...state.players, action.newPlayer] };
        default: return state;
    }
}

export default reducer
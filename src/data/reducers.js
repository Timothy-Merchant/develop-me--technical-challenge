export const deletePlayer = (state, { index }) => ({
    ...state,
    players: state.players.filter((player, i) => index !== i)
})

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE_PLAYER": return { ...state, players: [...state.players, action.newPlayer] };
        case "DELETE_PLAYER": return deletePlayer(state, action);
        default: return state;
    }
}

export default reducer
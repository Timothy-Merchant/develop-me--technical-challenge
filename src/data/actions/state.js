export const createPlayer = (data) => {
    return {
        type: "CREATE_PLAYER",
        newPlayer: data
    }
}

export const deletePlayer = (data) => {
    return {
        type: "DELETE_PLAYER",
        index: data
    }
}
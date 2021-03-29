export const createPlayer = (data) => {    
    return {
        type: "CREATE_PLAYER",
        newPlayer: data
    }
}
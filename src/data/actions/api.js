import axios from '../../axios'
import { showRounds } from "./state";

export const createRound = (data) => {

    return (dispatch) => {
        axios.post("/rounds", {
            ...data
        }).then(({ data }) => {
            console.log(data)
            dispatch(showRounds(data.data));
        })
    }
}
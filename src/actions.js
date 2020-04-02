import {
    CHANGE_SEARCH_FIELD,
    REQEUST_ROBOTS_PENDING,
    REQEUST_ROBOTS_SUCCESSS,
    REQEUST_ROBOTS_FAILED
} from './constants.js'

export const setSearch = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQEUST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQEUST_ROBOTS_SUCCESSS, payload: data }))
        .catch(error => dispatch({ type: REQEUST_ROBOTS_FAILED, payload: error }))
}
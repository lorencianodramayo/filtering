import {
    CHANGE_SEARCH_FIELD,
    REQEUST_ROBOTS_PENDING,
    REQEUST_ROBOTS_SUCCESSS,
    REQEUST_ROBOTS_FAILED
} from './constants.js'

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch,action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload}
        default:
            return state
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type){
        case REQEUST_ROBOTS_PENDING:
            return {...state, isPending:true}
        case REQEUST_ROBOTS_SUCCESSS:
            return {...state, robots: action.payload, isPending: false}
        case REQEUST_ROBOTS_FAILED:
            return {...state, error: action.payload, isPending: false}
        default:
            return state;
    }
}
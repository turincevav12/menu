<<<<<<< HEAD
export function timeList(state = [], action) {
    switch( action.type ) {
        case "ADD_TIME" : 
            return [
                ...state,
                action.timeObject
            ]

        case "DELETE_TIME" : 
            return [
                [],
                action.timeObject
=======


export function timeList(state = {

    timeList:[

    ],

    timeListPopover:{
        
    }

}, action) {
    switch( action.type ) {
        case "ADD_TIME" : 
            return [
                ...state.timeList,
                action.timeObject
            ]
        case "DELETE_TIME":
            return[
                [].timeList,
                action.timeObject
            ]
        case "CREAT_TIME_POPOVER":
            return[
                state.timeListPopover,
                action.objectPopoverTimes
>>>>>>> 87288a66ffd35f46917cafaac697de09c1b2edf2
            ]
    }
    return state;
}
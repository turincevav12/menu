import { createStore } from 'redux';

import { timeList } from "./reducer"

export const store = createStore(
    timeList
)

<<<<<<< HEAD
export function sorted(objectStoreTime){
    objectStoreTime.forEach((element, index) => {
        element.splice(3,1)
        element.push(index)
=======
function creatingPopoverList () {

    let minutes00 = []
    let minutes30 = []
    let minute00 = "00"
    let minute30 = "30"
    for (let indexCreateElement = 0; indexCreateElement != 6; indexCreateElement++){
        minutes00.push(minute00)      
        minutes30.push(minute30) 
        
        minute00 = ("00" + (Number.parseInt(minute00) + 5)).slice(-2)
        minute30 = ("00" + (Number.parseInt(minute30) + 5)).slice(-2)
    }

    store.dispatch({
        type: "CREAT_TIME_POPOVER",
        objectPopoverTimes: {
            minutesFrom00to30:[minutes00],
            minutesFrom300to60:[minutes30]
        }  
    })
}

creatingPopoverList()

export function sorted(timesData){
    let sortedTime = []
    timesData.forEach((e, i) => {
        e.splice(2,1)
        e.push(i)
>>>>>>> 87288a66ffd35f46917cafaac697de09c1b2edf2
    })

<<<<<<< HEAD
    store.getState().sort( function(a, b) {
        return a[0] - b[0]
    })
}

=======
>>>>>>> 87288a66ffd35f46917cafaac697de09c1b2edf2
export function deleteTime (id){

    store.getState().splice(id, 1)

<<<<<<< HEAD
    let objectStoreTime = store.getState()

    sorted(objectStoreTime)
}

export function addTime (time){
=======
    let trueTimeObject = store.getState()

    store.dispatch ({
        type: "DELETE_TIME",
        timeObject: trueTimeObject
    })

    console.log(this.getState())
    sorted(trueTimeObject)
}

export function addTime (time){
    let objectStoreTimeList = store.getState()[0]

    console.log(objectStoreTimeList)

    if(objectStoreTimeList.lenth !== 0){
        objectStoreTimeList.forEach((el, i) => {
            if (time[1] == el[1]){
                store.getState().splice(i, 1)          
            }        
        });
    }    

    store.dispatch ({
        type: "ADD_TIME",
        timeObject: time
    })
>>>>>>> 87288a66ffd35f46917cafaac697de09c1b2edf2

    let enterTimeValue = time[1]
    let enterTimeId = time[2]

    let test = 0

    store.getState().forEach((element) => {

        if(element[2] === enterTimeId){
            if( enterTimeId !== enterTimeValue){             
                test = test + 0
            }else{
                test = test + 1
            }
        }else{
            test = test + 0
        }              
    })    

    if(test === 0 || time[3] === 1){
        store.getState().forEach((element, index) => {
            
            if (time[2] === element[2]){
                store.getState().splice(index, 1)          
            }        
        })
    
        store.dispatch ({
            type: "ADD_TIME",
            timeObject: time
        })
    
        let objectStoreTime = store.getState()
    
        sorted(objectStoreTime)   
    }
     
}
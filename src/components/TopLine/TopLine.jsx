import React, { Component } from 'react';

import { deleteTime } from "../../store/actionCreators"

import styles from "./TopLine.css"

export class TopLine extends Component {
    constructor(props){
        super (props)
<<<<<<< HEAD
        this.state = {
            times: [],
            reset: 0
        }
    }

    deleteTimes = (e) => {
        let idDelet = e.target.id

        deleteTime(idDelet)
        
        setTimeout(() => {
            this.setState({
=======
    }    


    deleteTimes = (e) => {
>>>>>>> 87288a66ffd35f46917cafaac697de09c1b2edf2

        let id = e.target.id
        deleteTime(id)
    }

    render(){
<<<<<<< HEAD
        
        let timeStore = this.props.timeStore
        console.log|(timeStore)

        return(    
            <div className="topLines">
                <span className="topLineText"> 
                    Время начала
                </span><br/>
                {(timeStore.length !== 0) && timeStore.map((e, i) => <div className="blockTimes" id={e[3]} key={i} onClick = {e => this.deleteTimes(e)}>
                    {e[1]}
                </div>)}
=======
        console.log(this.props.timeList)
        return(    
            <div className="topLines">
                
>>>>>>> 87288a66ffd35f46917cafaac697de09c1b2edf2
            </div>
        )
    }
}
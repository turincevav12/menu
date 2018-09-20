import React from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { arrow, OverlayTrigger } from "bootstrap"
import { addTime } from "../../store/actionCreators"

import style from "./Popover.css"
<<<<<<< HEAD
import { store } from "../../store/actionCreators"
=======
>>>>>>> 87288a66ffd35f46917cafaac697de09c1b2edf2

export class PopoverItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

<<<<<<< HEAD
    let mins00 = []
    let mins30 = []
    let min00 = "00"
    let min30 = "30"

    for (let i = 0; i !== 6;i++){
      mins00.push(min00)      
      mins30.push(min30) 
      min00 = ("00" + (Number.parseInt(min00) + 5)).slice(-2)
      min30 = ("00" + (Number.parseInt(min30) + 5)).slice(-2)
    }

=======
    
>>>>>>> 87288a66ffd35f46917cafaac697de09c1b2edf2
    this.state = ({
      popoverOpen: false,
      clickTime: "",
      dopTime: [],
      idClick: '',
      dopClick: '',
      styles: '',
      mins00: mins00,
      mins30: mins30
    })
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  enterTime = (e) => {
    var target = e.target

    let time = e.target.innerText
    let id = e.target.innerText
    let intTimeSplit = (e.target.innerText).split(":")

    let intTime = Number.parseInt(intTimeSplit[0]+intTimeSplit[1])

<<<<<<< HEAD
    store.getState().forEach(el => {
      if (el[2] === e.target.innerText){
        this.setState({
          styles: el[1]
        })
      }      
    });

=======
>>>>>>> 87288a66ffd35f46917cafaac697de09c1b2edf2
    setTimeout(() => {
      this.setState({
        popoverOpen: !this.state.popoverOpen,
        clickTime: ((target.innerText).split(':'))[0],
        dopTime: ((target.innerText).split(':'))[1],
        idClick: id
      });
      addTime([intTime, time, id])
    }, 100);      

  }

  enterDopTime(e){

    let timesInt = Number.parseInt(this.state.clickTime + e.target.innerText)
    let times = this.state.clickTime + ":" + e.target.innerText

    addTime([timesInt, times, this.state.idClick, 1])

    this.setState({
      popoverOpen: !this.state.popoverOpen,
      dopClick: e.target.innerText
    });

  }

  render() {

    let timePopover = this.props.popoverList

    //console.log(timePopover.minutesFrom00to30)

    return (
      <span>

        <div className="mr-1" color="secondary" id={'Popover-' + this.props.data[1]} onClick={(e)=>this.enterTime(e)}>
            {this.props.data[0][0] +":"+this.props.data[0][1]}
        </div>
<<<<<<< HEAD

        <Popover title="Time" placement="top" isOpen={this.state.popoverOpen} target={'Popover-' + this.props.data[1]} toggle={this.toggle}>

          <PopoverHeader className="popoverHeader">
            Точное время
          </PopoverHeader>

          <PopoverBody className="arrow">
            {
              (this.state.dopTime === "00") && this.state.mins00.map((e, i)=>
                <div className={(this.state.styles === (this.state.clickTime + ":"+ e)) && "enterDopTimesFalse" || "enterDopTimes"} key={i} onClick = {(e) => this.enterDopTime(e)}>
                  {e}
                </div>
              )
              ||
              this.state.mins30.map((e, i)=>
                <div className={(this.state.styles === (this.state.clickTime + ":"+ e)) && "enterDopTimesFalse" || "enterDopTimes"} key={i} onClick = {(e) => this.enterDopTime(e)}>
                  {e}
                </div>
              )
            }
          </PopoverBody>
          
        </Popover>
=======
        
>>>>>>> 87288a66ffd35f46917cafaac697de09c1b2edf2
      </span>
    );
  }
}
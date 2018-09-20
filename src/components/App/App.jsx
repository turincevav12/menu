import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import style from "./App.css"

import PropTypes from 'prop-types'

import { connect } from "react-redux"

import { timeList, ADD_TIME, replaceTime, addTime } from "../../index"

import { PopoverItem } from "../Popover/Popover.jsx"
import { TopLine } from "../TopLine/TopLine"

class PopoverExampleMulti extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      times: []
    };

    let times = []
    for (var i = 9; i != 29; i++) {
      if (i <= 23) {
        var timeHours = i
      } else {
        var timeHours = i - 24
      }
      for (var j = 0; j != 2; j++) {
        if (j == 0) {
          times.push([timeHours, "00"])
        } else {
          times.push([timeHours, "30"])
        }
      }
    }
    this.state = ({
      times: times,
      lengthMass: 0
    })
  }

  render() {

<<<<<<< HEAD
    console.log(this.props.timeStore)

    return (
      <div className="app">
        <TopLine timeStore={this.props.timeStore} />
        {this.state.times.map((time, i) => {
          return <PopoverItem key={i} data={[time, i]} />;
        })}
      </div>
    );
  }
}


function mapStateToProps(state) {  

  return {
    timeStore: state
=======
      console.log("Объект стора", this.props.timeStore)

      return (
        <div className="app">
          <TopLine timeList={this.props.timeStore[0]}/>
          { this.state.times.map((time, i) => {
            return <PopoverItem key={i} popoverList={this.props.timeStore[1]} data={[time, i]} clickStore={() => this.clickStore()} />;
          })}
        </div>
      );
    }
>>>>>>> 87288a66ffd35f46917cafaac697de09c1b2edf2
  }
}

<<<<<<< HEAD
export default connect(mapStateToProps)(PopoverExampleMulti)
=======
  export default connect(
    state => ({
      timeStore: state
    })
  )(PopoverExampleMulti)
>>>>>>> 87288a66ffd35f46917cafaac697de09c1b2edf2

import React, { Component } from 'react';
import { connect } from 'react-redux'
import './CalendarBoard.css';
import CalendarDaySquare from '../CalendarDays/CalendarDays.js';

class CalendarBoard extends Component{
  renderCalendarMonToSun() {
    return (
      <div className="MondayToSunday" key="MondayToSunday">
        <p key="Sunday"> Sunday </p>
        <p key="Monday"> Monday </p>
        <p key="Tuesday"> Tuesday </p>
        <p key="Wednesday"> Wednesday </p>
        <p key="Thursday"> Thursday </p>
        <p key="Friday"> Friday </p>
        <p key="Saturday"> Saturday </p>
      </div>
    )
  }

  renderForm(month){
    console.log(month);
  }

  render() {
    return (
      <div className="board">
        {this.renderCalendarMonToSun()}
        <CalendarDaySquare month={this.props.currentMonth} onClickMethod={()=>this.renderForm(this.props.currentMonth)}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentMonth: state.currentMonth
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarBoard)

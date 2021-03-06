import React, { Component } from 'react';
import "./CalendarDay.css";
import { connect } from 'react-redux'
import Actions from '../actions/actions.js';
import Utils from '../utils.js';


class CalendarDay extends Component {
  markNoteDaySquare(){
    const dayNote = Utils.getDayNote(this.props.squareID);
    if(dayNote){
      return <div className={`dayNoteMarked ${Utils.getDayMood(this.props.squareID)}Marked`}> </div>
    }
    return null
  }

  isCurrentDate(squareID){
    const currentDate = this.props.currentMonth + this.props.currentDay;
    if(squareID === currentDate){
      return "currentDate"
    } 
  }

  render() {
    return(
      <div className={`day currentMonthDays  ${this.props.startingDayRecord} 
                    ${Utils.getDayMood(this.props.squareID)} ${this.isCurrentDate(this.props.squareID)}`}
          onClick={()=> this.props.displayForm(this.props.squareID)}>
      {this.props.day}
      {this.markNoteDaySquare()}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    moods: state.get("year2018Moods"),
    currentDay: state.get('currentDate')['day'],
    currentMonth: state.get('currentDate')['month'],
    currentYear: state.get('currentDate')['year'],
  }
}

function mapDispatchToProps(dispatch) {
   return {
     displayForm: (squareID) => {dispatch(Actions.showPopUP(squareID))},
   };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CalendarDay)

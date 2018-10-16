import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import moment from 'moment';
import '../styles/_match.css';

export default class Match extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeSlotIndex: 0,
      hasRemainingTimeSlots: true,
      isLoading: false,
      err: null
    };
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleTryAgain = this.handleTryAgain.bind(this);
  }

  handleConfirm(event) {
    event.preventDefault();
    this.props.history.push({
      pathname: '/secondary-form',
      studentID: this.props.location.teacherMatches.studentID,
      chosenTeacherID: this.props.location.teacherMatches.suggestedTimeSlots[
        this.state.timeSlotIndex
      ].teacherID,
      chosenTeacherName: this.props.location.teacherMatches.suggestedTimeSlots[
        this.state.timeSlotIndex
      ].name,
      chosenTeacherEmail: this.props.location.teacherMatches.suggestedTimeSlots[
        this.state.timeSlotIndex
      ].email,
      chosenDay: this.props.location.teacherMatches.suggestedTimeSlots[
        this.state.timeSlotIndex
      ].time.day,
      chosenHour: this.props.location.teacherMatches.suggestedTimeSlots[
        this.state.timeSlotIndex
      ].time.hour
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push({
      pathname: '/'
    });
  }

  handleTryAgain(event) {
    event.preventDefault();
    this.setState({ isLoading: true });
    setTimeout(() => {
      if (
        this.state.timeSlotIndex ===
        this.props.location.teacherMatches.suggestedTimeSlots.length - 1
      ) {
        this.setState({ hasRemainingTimeSlots: false, isLoading: false });
      }
      if (this.state.hasRemainingTimeSlots) {
        this.setState({
          timeSlotIndex: this.state.timeSlotIndex + 1,
          isLoading: false
        });
      }
    }, 1000);
  }

  formatHour(hour) {
    const hourString = hour.toString();
    const hoursAndMinutes = hourString.concat(':00');
    return moment(hoursAndMinutes, 'HH:mm').format('h:mm a');
  }

  formatDay(day) {
    const currentDay = moment().day();
    let dayOfWeek;
    if (day === 'sunday') {
      dayOfWeek = 0;
    } else if (day === 'monday') {
      dayOfWeek = 1;
    } else if (day === 'tuesday') {
      dayOfWeek = 2;
    } else if (day === 'wednesday') {
      dayOfWeek = 3;
    } else if (day === 'thursday') {
      dayOfWeek = 4;
    } else if (day === 'friday') {
      dayOfWeek = 5;
    } else if (day === 'saturday') {
      dayOfWeek = 6;
    }
    if (dayOfWeek <= currentDay) {
      dayOfWeek = dayOfWeek + 7;
    }
    const dow = moment()
      .day(dayOfWeek)
      .format('dddd, MMMM Do YYYY');
    return dow;
  }

  render() {
    if (!this.props.location.teacherMatches) {
      return <Redirect to="/" />;
    }
    if (this.state.isLoading) {
      return <Loading />;
    }
    if (!this.state.hasRemainingTimeSlots) {
      return <Redirect to="/no-match" />;
    }

    return (
      <Fragment>
        <div className="container">
          <div className="match">
            <h1>We have a great match for you!</h1>
            <p>
              Please Confirm, Cancel, or Try Again to look for a different date.
            </p>
            <div className="matchdetails">
              <div>
                <strong>Teacher:</strong>
                <span />
                {
                  this.props.location.teacherMatches.suggestedTimeSlots[
                    this.state.timeSlotIndex
                  ].name
                }
              </div>
              <div>
                <strong>Day:</strong>
                <span />
                {this.formatDay(
                  this.props.location.teacherMatches.suggestedTimeSlots[
                    this.state.timeSlotIndex
                  ].time.day
                )}
              </div>
              <div>
                <strong>Time:</strong>
                <span />
                {this.formatHour(
                  this.props.location.teacherMatches.suggestedTimeSlots[
                    this.state.timeSlotIndex
                  ].time.hour
                )}
              </div>
            </div>
          </div>
          <div className="matchbuttons">
            <button onClick={this.handleConfirm} className="btn btn-primary">
              CONFIRM
            </button>
            <span />
            <button
              onClick={this.handleCancel}
              className="btn btn-outline-secondary"
            >
              CANCEL
            </button>
            <span />
            <button onClick={this.handleTryAgain} className="btn btn-secondary">
              TRY AGAIN
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

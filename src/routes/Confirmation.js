import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import '../styles/_match.css';

export default class Confirmation extends Component {
  constructor(props) {
    super(props);

    this.state = { formSubmitted: false };

    //this.handleConfirm = this.handleConfirm.bind(this);
    //this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.sendEmail(
      `${process.env.REACT_APP_EMAILJS_TEMPLATEID}`, //template
      `${process.env.REACT_APP_EMAILJS_RECEIVER}`, //to_email,
      `${process.env.REACT_APP_EMAILJS_SENDER}`, //from_email,
      this.props.location.confirmedAppt.name, //to_name,
      'Team AWSOM', //from_name,
      this.props.location.confirmedAppt.studentName, //studentName,
      this.props.location.confirmedAppt.teacher, //teacherName,
      this.formatDay(this.props.location.confirmedAppt.day), //day
      //this.props.location.confirmedAppt.day, //day,
      this.formatHour(this.props.location.confirmedAppt.hour) //hour
      //this.props.location.confirmedAppt.hour //hour
    );

    this.setState({
      formSubmitted: true
    });
  }

  // handleCancel(event) {
  //   event.preventDefault();
  //   this.props.history.push({
  //     pathname: '/'
  //   });
  // }

  // handleConfirm(event) {
  //   event.preventDefault();

  //   this.sendEmail(
  //     `${process.env.REACT_APP_EMAILJS_TEMPLATEID}`, //template
  //     `${process.env.REACT_APP_EMAILJS_RECEIVER}`, //to_email,
  //     `${process.env.REACT_APP_EMAILJS_SENDER}`, //from_email,
  //     this.props.location.confirmedAppt.name, //to_name,
  //     'Team AWSOM', //from_name,
  //     this.props.location.confirmedAppt.studentName, //studentName,
  //     this.props.location.confirmedAppt.teacher, //teacherName,
  //     this.formatDay(this.props.location.confirmedAppt.day), //day
  //     //this.props.location.confirmedAppt.day, //day,
  //     this.formatHour(this.props.location.confirmedAppt.hour) //hour
  //     //this.props.location.confirmedAppt.hour //hour
  //   );

  //   this.setState({
  //     formSubmitted: true
  //   });
  // }
  sendEmail(
    templateId,
    to_email,
    from_email,
    to_name,
    from_name,
    studentName,
    teacherName,
    day,
    hour
  ) {
    window.emailjs
      .send('mailgun', templateId, {
        to_email,
        from_email,
        to_name,
        from_name,
        studentName,
        teacherName,
        day,
        hour
      })
      .then(res => {
        this.setState({ formEmailSent: true });
      })
      .catch(err => console.error('Failed to send feedback. Error: ', err));
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
    if (!this.props.location.confirmedAppt) {
      return <Redirect to="/" />;
    }
    // if (this.state.formSubmitted) {
    //   return (
    //     <div className="container">
    //       <div className="match">
    //         <h1>Thank You</h1>
    //         <p>See you soon!</p>
    //       </div>
    //     </div>
    //   );
    // }
    return (
      <Fragment>
        <div className="container">
          <div className="match">
            <h1>Thank You!</h1>
            <p>
              A confirmation for the following appointment will be sent to your
              email address.
            </p>
            <div className="matchdetails">
              <div>
                <strong>Teacher:</strong>
                <span />
                {this.props.location.confirmedAppt.teacher}
              </div>
              <div>
                <strong>Day:</strong>
                <span />
                {this.formatDay(this.props.location.confirmedAppt.day)}
              </div>
              <div>
                <strong>Time:</strong>
                <span />
                {this.formatHour(this.props.location.confirmedAppt.hour)}
              </div>
            </div>
          </div>

          {/* <div className="matchbuttons">
            <button onClick={this.handleConfirm} className="btn btn-primary">
              SEND EMAIL
            </button>
            <span />
            <button
              onClick={this.handleCancel}
              className="btn btn-outline-secondary"
            >
              NO THANKS
            </button>
          </div>*/}
        </div>
      </Fragment>
    );
  }
}

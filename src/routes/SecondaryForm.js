import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
//import { DebugFormik } from '../components/DebugFormik';
import Loading from '../components/Loading';
import * as Yup from 'yup';
import '../styles/_freetrial.css';

// const secondaryFormValues = {
//   // firstName: '',
//   // lastName: '',
//   name: '',
//   email: '',
//   phone: '',
//   studentName: '',
//   birthDate: '',
//   //anythingElse: '',
//   hearAbout: '',
//   studentID: '',
//   teacherId: '',
//   timeslot: {
//     name: '',
//     teacherID: '',
//     email: '',
//     time: {
//       day: '',
//       hour: ''
//     }
//   }
// };

const minBirthDate = '1900-01-01';

const secondaryFormSchema = Yup.object({
  studentID: Yup.string()
    .matches(/^[0-9a-fA-F]{24}$/, 'Must be valid ID')
    .required('Required'),
  teacherId: Yup.string()
    .matches(/^[0-9a-fA-F]{24}$/, 'Must be valid ID')
    .required('Required'),
  timeslot: Yup.object({
    name: Yup.string().required('Timeslot name required'),
    teacherID: Yup.string().required('Timeslot Teacher ID required'),
    email: Yup.string().required('Timeslot Email required'),
    time: Yup.object({
      day: Yup.string().required('Timeslot Time Day required'),
      hour: Yup.string().required('Timeslot Time Hour required')
    })
  }),
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email()
    .required('Required'),
  phone: Yup.string()
    .matches(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      'Must be a valid 10-digit phone number.'
    )
    .required('Required'),
  studentName: Yup.string().required('Required'),
  birthDate: Yup.date()
    .min(minBirthDate, `Wow! Maybe you should be a teacher instead.`)
    .max(
      new Date(),
      `That's in the future! Check the flux capacitor in your Delorean. `
    )
    .required('Required'),
  hearAbout: Yup.string().required('Required')
});

export default class SecondaryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      err: null,
      confirmedAppt: {
        studentID: '',
        name: '',
        email: '',
        studentName: '',
        teacherID: '',
        teacher: '',
        teacherEmail: '',
        day: '',
        hour: ''
      }
    };
  }
  render() {
    if (this.state.err) {
      return (
        <div className="container">
          <div className="freetrial_description">
            <h1>{this.state.err.message}</h1>
          </div>
        </div>
      );
    }
    if (this.state.isLoading) {
      return <Loading />;
    }
    if (!this.props.location.studentID) {
      return <Redirect to="/" />;
    }
    return (
      <Fragment>
        <div className="container">
          <div className="freetrial_description">
            <h1>We just need a few more details...</h1>
          </div>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              studentName: '',
              //birthDate: '2018-10-04T03:08:00.447Z',
              birthDate: '',
              hearAbout: '',
              studentID: `${this.props.location.studentID}`,
              teacherId: `${this.props.location.chosenTeacherID}`,
              timeslot: {
                name: `${this.props.location.chosenTeacherName}`,
                teacherID: `${this.props.location.chosenTeacherID}`,
                email: `${this.props.location.chosenTeacherEmail}`,
                time: {
                  day: `${this.props.location.chosenDay}`,
                  hour: `${this.props.location.chosenHour}`
                }
              }
            }}
            validationSchema={secondaryFormSchema}
            // onSubmit={values => {
            //   setTimeout(() => {
            //     alert(JSON.stringify(values, null, 2));
            //   }, 500);
            // }}
            onSubmit={values => {
              //alert(JSON.stringify(values, null, 2));
              this.setState({
                isLoading: true
              });

              fetch(
                `${
                  process.env.REACT_APP_API_URL_REMOTE
                }/api/confirm-appointment`,
                //`${
                // process.env.REACT_APP_API_URL_LOCAL
                //}/api/confirm-appointment`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                  },
                  body: JSON.stringify(values)
                }
              )
                .then(response => {
                  if (response.ok) {
                    return response.text();
                  } else {
                    throw new Error('Oops! Something went wrong ...');
                  }
                })
                .then(data => {
                  if (data && data.includes('Success')) {
                    console.log(JSON.stringify(data));
                    this.setState(() => ({
                      confirmedAppt: {
                        studentID: `${this.props.location.studentID}`,
                        name: values.name,
                        email: values.email,
                        studentName: values.studentName,
                        teacherID: `${this.props.location.chosenTeacherID}`,
                        teacher: `${this.props.location.chosenTeacherName}`,
                        teacherEmail: `${
                          this.props.location.chosenTeacherEmail
                        }`,
                        day: `${this.props.location.chosenDay}`,
                        hour: `${this.props.location.chosenHour}`
                      },
                      isLoading: false
                    }));
                    this.props.history.push({
                      pathname: '/confirmation',
                      confirmedAppt: this.state.confirmedAppt
                    });
                  } else {
                    console.log(JSON.stringify(data));
                    this.setState(() => ({
                      isLoading: false
                    }));
                  }
                })
                .catch(err => this.setState({ err, isLoading: false }));
            }}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form>
                <div className="app__form">
                  <ErrorMessage name="studentID">
                    {msg => <div className="field-error">{msg}</div>}
                  </ErrorMessage>

                  <ErrorMessage name="teacherId">
                    {msg => <div className="field-error">{msg}</div>}
                  </ErrorMessage>

                  <div className="app__form_item">
                    <div>Name *</div>
                    <Field
                      name="name"
                      className={
                        errors.name && touched.name
                          ? 'app__form_input field-error'
                          : 'app__form_input'
                      }
                      type="text"
                    />
                    <ErrorMessage name="name">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="app__form_item">
                    <div>Email Address *</div>
                    <Field
                      name="email"
                      className={
                        errors.email && touched.email
                          ? 'app__form_input field-error'
                          : 'app__form_input'
                      }
                      type="text"
                    />
                    <ErrorMessage name="email">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="app__form_item">
                    <div>Phone *</div>
                    <Field
                      name="phone"
                      className={
                        errors.phone && touched.phone
                          ? 'app__form_input field-error'
                          : 'app__form_input'
                      }
                      type="text"
                    />
                    <ErrorMessage name="phone">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="app__form_item">
                    <div>Student Name *</div>
                    <Field
                      name="studentName"
                      className={
                        errors.studentName && touched.studentName
                          ? 'app__form_input field-error'
                          : 'app__form_input'
                      }
                      type="text"
                    />
                    <ErrorMessage name="studentName">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="app__form_item">
                    <div>Student Birth Date *</div>
                    <Field
                      name="birthDate"
                      className={
                        errors.birthDate && touched.birthDate
                          ? 'app__form_input field-error'
                          : 'app__form_input'
                      }
                      type="date"
                    />
                    <ErrorMessage name="birthDate">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  {/* <div className="app__form_item">
                    <div>
                      Anything else you would like your teacher to know?
                    </div>
                    <Field
                      name="anythingElse"
                      className={
                        errors.anythingElse && touched.anythingElse
                          ? 'app__form_input field-error'
                          : 'app__form_input'
                      }
                      type="text"
                    />
                    <ErrorMessage name="anythingElse">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div> */}

                  <div className="app__form_item">
                    <div>How did you hear about us? *</div>
                    <div className="app__form_addresssub">
                      Teacher's name, friend's name, Facebook, a little bird,
                      Craigslist, Yelp, Car ads
                    </div>
                    <Field
                      name="hearAbout"
                      className={
                        errors.hearAbout && touched.hearAbout
                          ? 'app__form_input field-error'
                          : 'app__form_input'
                      }
                      type="text"
                    />
                    <ErrorMessage name="hearAbout">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="app__form_container">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary "
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
                {/* <DebugFormik /> */}
              </Form>
            )}
          </Formik>
        </div>
      </Fragment>
    );
  }
}

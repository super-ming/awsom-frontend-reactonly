import React, { Fragment } from 'react';
import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik';
//import { DebugFormik } from '../components/DebugFormik';
import SelectExperienceLevel from '../components/SelectExperienceLevel';
import SelectHasInstrument from '../components/SelectHasInstrument';
import SelectInstrument from '../components/SelectInstrument';
import SelectMusicStyle from '../components/SelectMusicStyle';
import Loading from '../components/Loading';
import { federatedStates } from '../const/federatedStates';
import { businessHours } from '../const/businessHours';
import { businessDays } from '../const/businessDays';
import * as Yup from 'yup';

const initialFormValues = {
  instrument: '',
  musicStyle: '',
  experienceLevel: '',
  hasInstrument: '',
  addressOne: '',
  addressTwo: '',
  city: '',
  state: '',
  zip: '',
  availability: [
    {
      day: '',
      fromTime: 0,
      toTime: 0
    }
  ],
  allergies: '',
  specialNeeds: ''
};

const initialFormSchema = Yup.object({
  instrument: Yup.string().required('Required'),
  musicStyle: Yup.string().required('Required'),
  experienceLevel: Yup.string().required('Required'),
  hasInstrument: Yup.string().required('Required'),
  addressOne: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string()
    .oneOf(federatedStates, 'Must be a valid two-letter state abbreviation.')
    .required('Required'),
  zip: Yup.string()
    .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Must be a five-number zip code.')
    .required('Required'),
  availability: Yup.array().of(
    Yup.object({
      day: Yup.string().required('Day required'),
      fromTime: Yup.number().required('Start time required'),
      toTime: Yup.number().required('End time required')
    })
  )
});

// function handleSubmit(url = ``, data = {}) {
//   // Default options are marked with *
//   return fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     //mode: 'cors', // no-cors, cors, *same-origin
//     //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     //credentials: 'same-origin', // include, same-origin, *omit
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8'
//     },
//     //redirect: 'follow', // manual, *follow, error
//     //referrer: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   }).then(response => response.json()); // parses response to JSON
// }

export default class FreeTrial extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      err: null,
      teacherMatches: {}
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
    return (
      <Fragment>
        <div className="container">
          <div className="freetrial_description">
            <h1>Let's find a great teacher in your area!</h1>
          </div>
          <Formik
            initialValues={initialFormValues}
            validationSchema={initialFormSchema}
            // onSubmit={values => {
            //   setTimeout(() => {
            //     alert(JSON.stringify(values, null, 2));
            //   }, 500);
            // }}
            onSubmit={values => {
              // let tempArray = values.availability;
              // for (let i = 0; i < tempArray.length; i++) {
              //   tempArray[i].fromTime = parseInt(tempArray[i].fromTime, 10);
              //   tempArray[i].toTime = parseInt(tempArray[i].toTime, 10);
              // }
              // values.availability = tempArray;
              //console.log('values.availability array: ', values.availability);
              this.setState({ isLoading: true });
              fetch(
                `${
                  process.env.REACT_APP_API_URL_REMOTE
                }/api/free-trial-request`,
                //`${process.env.REACT_APP_API_URL_LOCAL}/api/free-trial-request`,
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
                    return response.json();
                  } else {
                    throw new Error('Oops! Something went wrong ...');
                  }
                })
                .then(data => {
                  if (
                    data.message &&
                    data.message.includes('no matches found')
                  ) {
                    console.log('NO MATCH');
                    //console.log(JSON.stringify(data));
                    this.setState(() => ({
                      isLoading: false
                    }));
                    this.props.history.push({
                      pathname: '/no-match'
                    });
                  } else if (data.studentID) {
                    console.log('MATCH');
                    //console.log(JSON.stringify(data));
                    this.setState(() => ({
                      teacherMatches: data,
                      isLoading: false
                    }));
                    this.props.history.push({
                      pathname: '/match',
                      teacherMatches: this.state.teacherMatches
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
                  <div className="app__form_item">
                    <SelectInstrument />
                  </div>
                  <div className="app__form_item">
                    <SelectMusicStyle />
                  </div>
                  <div className="app__form_item">
                    <SelectExperienceLevel />
                  </div>
                  <div className="app__form_item">
                    <SelectHasInstrument />
                  </div>
                  <div className="app__form_item">
                    <div>Address 1 *</div>
                    <Field
                      name="addressOne"
                      className={
                        errors.addressOne && touched.addressOne
                          ? 'app__form_input field-error'
                          : 'app__form_input'
                      }
                      type="text"
                    />
                    <ErrorMessage name="addressOne">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="app__form_item">
                    <div>Address 2</div>
                    <Field
                      name="addressTwo"
                      className="app__form_input"
                      type="text"
                    />
                    <ErrorMessage name="addressTwo">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="app__form_item">
                    <div>City *</div>
                    <Field
                      name="city"
                      className={
                        errors.city && touched.city
                          ? 'app__form_input field-error'
                          : 'app__form_input'
                      }
                      type="text"
                    />
                    <ErrorMessage name="city">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="app__form_item">
                    <div>State *</div>
                    <Field
                      name="state"
                      className={
                        errors.zip && touched.zip
                          ? 'app__form_input field-error'
                          : 'app__form_input'
                      }
                      type="text"
                    />
                    <ErrorMessage name="state">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="app__form_item">
                    <div>Zip *</div>
                    <Field
                      name="zip"
                      className={
                        errors.zip && touched.zip
                          ? 'app__form_input field-error'
                          : 'app__form_input'
                      }
                      type="text"
                    />
                    <ErrorMessage name="zip">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="app__form_item">
                    <div>Availability *</div>

                    <FieldArray name="availability">
                      {({ push, remove }) => (
                        <Fragment>
                          {values.availability &&
                            values.availability.length > 0 &&
                            values.availability.map((item, index) => (
                              <div key={index}>
                                <Field
                                  component="select"
                                  name={`availability[${index}].day`}
                                  className="app__form_dropdownbox"
                                >
                                  <option value="">Select</option>
                                  {businessDays.map(element => (
                                    <option
                                      key={element.id}
                                      value={element.day}
                                    >
                                      {element.day.replace(/^\w/, c =>
                                        c.toUpperCase()
                                      )}
                                    </option>
                                  ))}
                                </Field>
                                <span />
                                <Field
                                  component="select"
                                  name={`availability[${index}].fromTime`}
                                >
                                  <option value="">From</option>
                                  {businessHours.map(element => (
                                    <option
                                      key={element.id}
                                      value={element.time}
                                    >
                                      {element.label}
                                    </option>
                                  ))}
                                </Field>
                                <span />
                                <Field
                                  component="select"
                                  name={`availability[${index}].toTime`}
                                >
                                  <option value="">To</option>
                                  {businessHours.map(element => (
                                    <option
                                      key={element.id}
                                      value={element.time}
                                    >
                                      {element.label}
                                    </option>
                                  ))}
                                </Field>

                                <button
                                  type="button"
                                  className="btn"
                                  onClick={() => remove(index)}
                                >
                                  <i className="far fa-times-circle" />
                                </button>
                                <ErrorMessage
                                  name={`availability[${index}].day`}
                                >
                                  {msg => (
                                    <div className="field-error">{msg}</div>
                                  )}
                                </ErrorMessage>
                                <ErrorMessage
                                  name={`availability[${index}].fromTime`}
                                >
                                  {msg => (
                                    <div className="field-error">{msg}</div>
                                  )}
                                </ErrorMessage>
                                <ErrorMessage
                                  name={`availability[${index}].toTime`}
                                >
                                  {msg => (
                                    <div className="field-error">{msg}</div>
                                  )}
                                </ErrorMessage>
                              </div>
                            ))}
                          <div className="app__form_container">
                            <button
                              type="button"
                              onClick={() =>
                                push({ day: '', fromTime: '', toTime: '' })
                              }
                              className="btn btn-secondary"
                            >
                              Add Time
                            </button>
                          </div>
                        </Fragment>
                      )}
                    </FieldArray>
                  </div>
                  <div className="app__form_item">
                    <div>Allergies:</div>
                    <Field
                      name="allergies"
                      className="app__form_input"
                      type="text"
                    />
                    <ErrorMessage name="allergies">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="app__form_item">
                    <div>Special Needs:</div>
                    <Field
                      name="specialNeeds"
                      className="app__form_input"
                      type="text"
                    />
                    <ErrorMessage name="specialNeeds">
                      {msg => <div className="field-error">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="app__form_container">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary "
                    >
                      {isSubmitting ? '...' : 'SUBMIT'}
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

import React, { Fragment, Component } from 'react';
import { Field, ErrorMessage } from 'formik';
import { businessHours } from '../const/businessHours';

export default class SelectToTime extends Component {
  render() {
    return (
      <Fragment>
        <Field
          component="select"
          name="toTime"
          className="app__form_dropdownbox"
        >
          <option value="">To</option>
          {businessHours.map(element => (
            <option key={element.id} value={element.time}>
              {element.label}
            </option>
          ))}
        </Field>
        <ErrorMessage name="toTime">
          {msg => <div className="field-error">{msg}</div>}
        </ErrorMessage>
      </Fragment>
    );
  }
}

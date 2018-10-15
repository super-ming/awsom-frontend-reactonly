import React, { Fragment, Component } from 'react';
import { Field, ErrorMessage } from 'formik';
import { businessHours } from '../const/businessHours';

export default class SelectFromTime extends Component {
  render() {
    return (
      <Fragment>
        <Field
          component="select"
          name="fromTime"
          className="app__form_dropdownbox"
        >
          <option value="">From</option>
          {businessHours.map(element => (
            <option key={element.id} value={element.time}>
              {element.label}
            </option>
          ))}
        </Field>
        <ErrorMessage name="fromTime">
          {msg => <div className="field-error">{msg}</div>}
        </ErrorMessage>
      </Fragment>
    );
  }
}

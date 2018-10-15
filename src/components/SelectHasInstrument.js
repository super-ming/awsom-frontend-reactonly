import React, { Fragment, Component } from 'react';
import { Field, ErrorMessage } from 'formik';

const hasInstruments = [
  { id: 0, hasInstrument: true, label: 'yes' },
  { id: 1, hasInstrument: false, label: 'no' }
];

export default class SelectHasInstrument extends Component {
  render() {
    return (
      <Fragment>
        <div>Do you have an instrument already? *</div>

        <Field
          component="select"
          name="hasInstrument"
          className="app__form_dropdownbox"
        >
          <option value="">Select</option>
          {hasInstruments.map(element => (
            <option key={element.id} value={element.hasInstrument}>
              {element.label}
            </option>
          ))}
        </Field>
        <ErrorMessage name="hasInstrument">
          {msg => <div className="field-error">{msg}</div>}
        </ErrorMessage>
      </Fragment>
    );
  }
}
// Using react-select
//
// import React, { Component } from 'react';
// import Select from 'react-select';

// const options = [{ value: 'no', label: 'No' }, { value: 'yes', label: 'Yes' }];

// export default class SelectStyle extends Component {
//   state = {
//     selectedOption: null
//   };
//   handleChange = selectedOption => {
//     this.setState({ selectedOption });
//     console.log(`Option selected:`, selectedOption);
//   };
//   render() {
//     const { selectedOption } = this.state;

//     return (
//       <Select
//         value={selectedOption}
//         onChange={this.handleChange}
//         options={options}
//       />
//     );
//   }
// }

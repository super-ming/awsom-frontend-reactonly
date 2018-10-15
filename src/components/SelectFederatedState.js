import React, { Fragment, Component } from 'react';
import { Field, ErrorMessage } from 'formik';

const federatedStates = [
  { id: 0, federatedState: 'AL' },
  { id: 1, federatedState: 'AK' },
  { id: 2, federatedState: 'AZ' },
  { id: 3, federatedState: 'AR' },
  { id: 4, federatedState: 'CA' },
  { id: 5, federatedState: 'CO' },
  { id: 6, federatedState: 'CT' },
  { id: 7, federatedState: 'DE' },
  { id: 8, federatedState: 'DC' },
  { id: 9, federatedState: 'FL' },
  { id: 10, federatedState: 'GA' },
  { id: 11, federatedState: 'HI' },
  { id: 12, federatedState: 'ID' },
  { id: 13, federatedState: 'IL' },
  { id: 14, federatedState: 'IN' },
  { id: 15, federatedState: 'IA' },
  { id: 16, federatedState: 'KS' },
  { id: 17, federatedState: 'KY' },
  { id: 18, federatedState: 'LA' },
  { id: 19, federatedState: 'ME' },
  { id: 20, federatedState: 'MD' },
  { id: 21, federatedState: 'MA' },
  { id: 22, federatedState: 'MI' },
  { id: 23, federatedState: 'MN' },
  { id: 24, federatedState: 'MS' },
  { id: 25, federatedState: 'MO' },
  { id: 26, federatedState: 'MT' },
  { id: 27, federatedState: 'NE' },
  { id: 28, federatedState: 'NV' },
  { id: 29, federatedState: 'NH' },
  { id: 30, federatedState: 'NJ' },
  { id: 31, federatedState: 'NM' },
  { id: 32, federatedState: 'NY' },
  { id: 33, federatedState: 'NC' },
  { id: 34, federatedState: 'ND' },
  { id: 35, federatedState: 'OH' },
  { id: 36, federatedState: 'OK' },
  { id: 37, federatedState: 'OR' },
  { id: 38, federatedState: 'PA' },
  { id: 39, federatedState: 'RI' },
  { id: 40, federatedState: 'SC' },
  { id: 41, federatedState: 'SD' },
  { id: 42, federatedState: 'TN' },
  { id: 43, federatedState: 'TX' },
  { id: 44, federatedState: 'UT' },
  { id: 45, federatedState: 'VT' },
  { id: 46, federatedState: 'VA' },
  { id: 47, federatedState: 'WA' },
  { id: 48, federatedState: 'WV' },
  { id: 49, federatedState: 'WI' },
  { id: 50, federatedState: 'WY' }
];

export default class SelectFederatedState extends Component {
  render() {
    return (
      <Fragment>
        <Field
          component="select"
          name="state"
          className="app__form_dropdownbox"
        >
          <option value="">Select</option>
          {federatedStates.map(element => (
            <option key={element.id} value={element.federatedState}>
              {element.federatedState}
            </option>
          ))}
        </Field>
        <ErrorMessage name="state">
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

// const options = [
//   { value: 'AL', label: 'AL' },
//   { value: 'AK', label: 'AK' },
//   { value: 'AZ', label: 'AZ' },
//   { value: 'AR', label: 'AR' },
//   { value: 'CA', label: 'CA' },
//   { value: 'CO', label: 'CO' },
//   { value: 'CT', label: 'CT' },
//   { value: 'DE', label: 'DE' },
//   { value: 'DC', label: 'DC' },
//   { value: 'FL', label: 'FL' },
//   { value: 'GA', label: 'GA' },
//   { value: 'HI', label: 'HI' },
//   { value: 'ID', label: 'ID' },
//   { value: 'IL', label: 'IL' },
//   { value: 'IN', label: 'IN' },
//   { value: 'IA', label: 'IA' },
//   { value: 'KS', label: 'KS' },
//   { value: 'KY', label: 'KY' },
//   { value: 'LA', label: 'LA' },
//   { value: 'ME', label: 'ME' },
//   { value: 'MD', label: 'MD' },
//   { value: 'MA', label: 'MA' },
//   { value: 'MI', label: 'MI' },
//   { value: 'MN', label: 'MN' },
//   { value: 'MS', label: 'MS' },
//   { value: 'MO', label: 'MO' },
//   { value: 'MT', label: 'MT' },
//   { value: 'NE', label: 'NE' },
//   { value: 'NV', label: 'NV' },
//   { value: 'NH', label: 'NH' },
//   { value: 'NJ', label: 'NJ' },
//   { value: 'NM', label: 'NM' },
//   { value: 'NY', label: 'NY' },
//   { value: 'NC', label: 'NC' },
//   { value: 'ND', label: 'ND' },
//   { value: 'OH', label: 'OH' },
//   { value: 'OK', label: 'OK' },
//   { value: 'OR', label: 'OR' },
//   { value: 'PA', label: 'PA' },
//   { value: 'RI', label: 'RI' },
//   { value: 'SC', label: 'SC' },
//   { value: 'SD', label: 'SD' },
//   { value: 'TN', label: 'TN' },
//   { value: 'TX', label: 'TX' },
//   { value: 'UT', label: 'UT' },
//   { value: 'VT', label: 'VT' },
//   { value: 'VA', label: 'VA' },
//   { value: 'WA', label: 'WA' },
//   { value: 'WV', label: 'WV' },
//   { value: 'WI', label: 'WI' },
//   { value: 'WY', label: 'WY' }
// ];

// export default class SelectState extends Component {
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

import React, { Fragment, Component } from 'react';
import { Field, ErrorMessage } from 'formik';

const instruments = [
  { id: 0, instrument: 'piano' },
  { id: 1, instrument: 'guitar' },
  { id: 2, instrument: 'voice' },
  { id: 3, instrument: 'woodwinds' },
  { id: 4, instrument: 'brass' },
  { id: 5, instrument: 'drums' },
  { id: 6, instrument: 'strings' },
  { id: 7, instrument: 'chamber' }
];

export default class SelectInstrument extends Component {
  // state = {
  //   instruments: [
  //     { id: 0, instrument: "piano" },
  //     { id: 1, instrument: "guitar" },
  //     { id: 2, instrument: "didgeridoo" }
  //   ]
  //};
  render() {
    return (
      <Fragment>
        <div>What instrument are you interested in learning? *</div>
        <Field
          component="select"
          name="instrument"
          className="app__form_dropdownbox"
        >
          <option value="">Select</option>
          {instruments.map(element => (
            <option key={element.id} value={element.instrument}>
              {element.instrument.replace(/^\w/, c => c.toUpperCase())}
            </option>
          ))}
        </Field>
        <ErrorMessage name="instrument">
          {msg => <div className="field-error">{msg}</div>}
        </ErrorMessage>
      </Fragment>
    );
  }
}

// import React, { Fragment, Component } from 'react';
// import { Field, ErrorMessage } from 'formik';

// export default class SelectInstrument extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Field component="select" name="instrument">
//           <option value="">Select...</option>
//           <option value="piano">Piano</option>
//           <option value="guitar">Guitar</option>
//           <option value="didgeridoo">Didgeridoo</option>
//           <option value="turntables">Yay</option>
//         </Field>
//         <ErrorMessage name="instrument">
//           {msg => <div className="field-error">{msg}</div>}
//         </ErrorMessage>
//       </Fragment>
//     );
//   }
// }

// Using react-select
//
// import React, { Component } from 'react';
// import Select from 'react-select';

// const options = [
//   { value: 'piano', label: 'Piano' },
//   { value: 'guitar', label: 'Guitar' },
//   { value: 'voice', label: 'Voice' },
//   { value: 'woodwinds', label: 'Woodwinds' },
//   { value: 'brass', label: 'Brass' },
//   { value: 'drums', label: 'Drums' },
//   { value: 'strings', label: 'Strings' },
//   { value: 'chamber', label: 'Chamber' }
// ];

// export default class SelectInstrument extends Component {
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

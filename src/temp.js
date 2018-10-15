// import React, { Component, Fragment } from 'react';
// import Header from '../components/Header';
// import '../styles/_freetrial.css';

// export default class SecondaryForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputvalue: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       inputvalue: event.target.value
//     });
//   }
//   render() {
//     return (
//       <Fragment>
//         <Header />
//         <div className="container">
//           <div className="freetrial_description">
//             <h1>We just need a few more details</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur.
//             </p>
//           </div>
//           <div className="app__form">
//             <form>
//               <div className="app__form_item">
//                 <div>Name: *</div>
//                 <input
//                   type="text"
//                   className="app__form_input"
//                   value={this.state.inputvalue}
//                   onChange={this.handleChange}
//                 />
//                 <div className="app__form_addresssub">First Name</div>
//                 <input
//                   type="text"
//                   className="app__form_input"
//                   value={this.state.inputvalue}
//                   onChange={this.handleChange}
//                 />
//                 <div className="app__form_addresssub">Last Name</div>
//               </div>

//               <div className="app__form_item">
//                 <div>Email Address: *</div>
//                 <input
//                   className="app__form_input"
//                   type="text"
//                   value={this.state.inputvalue}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="app__form_item">
//                 <div>Phone:</div>
//                 <input
//                   className="app__form_input"
//                   type="text"
//                   value={this.state.inputvalue}
//                   onChange={this.handleChange}
//                 />
//                 <div className="app__form_addresssub">(###) ###-####</div>
//               </div>
//               <div className="app__form_item">
//                 <div>Student Name(s): *</div>
//                 <input
//                   className="app__form_input"
//                   type="text"
//                   value={this.state.inputvalue}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="app__form_item">
//                 <div>Student Birth Date: *</div>
//                 <input
//                   className="app__form_input"
//                   type="text"
//                   value={this.state.inputvalue}
//                   onChange={this.handleChange}
//                 />
//               </div>

//               <div className="app__form_item">
//                 <div>Anything else you would like your teacher to know?</div>
//                 <input
//                   className="app__form_input"
//                   type="text"
//                   value={this.state.inputvalue}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="app__form_item">
//                 <div>How did you hear about us?</div>
//                 <div className="app__form_addresssub">
//                   Teacher's name, friend's name, Facebook, a little bird,
//                   Craigslist, Yelp, Car ads
//                 </div>
//                 <input
//                   className="app__form_input"
//                   type="text"
//                   value={this.state.inputvalue}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="app__form_container">
//                 <button type="submit" className="btn btn-primary">
//                   SUBMIT
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </Fragment>
//     );
//   }
// }

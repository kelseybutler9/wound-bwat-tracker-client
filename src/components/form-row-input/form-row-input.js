// import React from 'react';
//
// export default class FormRowInput extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       choices: [],
//       values: [],
//       element: '',
//       input: '',
//       name: '',
//       type: '',
//       label: ''
//     };
//   }
//
//   render () {
//     // const Element = this.props.element || 'input';
//     const Element = 'select';
//     const ElementComponent =
//         <Element
//           {...this.props.input}
//           id={this.props.input.name}
//           type={this.props.type}
//           ref={input => (this.input = input)} >
//           {this.props.children}
//         </Element>;
//
//     return (
//       <div className='form-row-input'>
//         <label htmlFor={this.props.input.name}>
//           {this.props.label}
//         </label>
//         {ElementComponent}
//       </div>
//     );
//   }
// }

import React from 'react';
import './form-row-input.css';

export default class FormRowInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        choices = [{choice: ''}],
        values = [{value: ''}],
        element = '',
        input = '',
        name = '',
        type = '',
        label = ''
      }
    }

    render() {
        const Element = this.props.element || 'input';
        let ElementComponent;

        if(typeof this.props.choices !== 'undefined' && this.props.choices.length > 0) {
          ElementComponent =
            <Element
                {...this.props.input}
                id={this.props.input.name}
                type={this.props.type}
                ref={input => (this.input = input)}  >
                {this.props.children}
            </Element>
        }
        else {
          let options = '';
          this.props.choices.forEach((choice, index) => {
            options += `<option value="${values[index]}">${choice}</option>`;
          })
          ElementComponent =
            <select>
              {options}
            </select>
        }

        return (
            <div className="form-row-input">
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                </label>
                {ElementComponent}
            </div>
        );
    }
}

import React from 'react';

export default class FormRowInput extends React.Component {
    render() {
        const Element = this.props.element || 'input';

        if(choices==[]) {
          Element =
            <Element
                {...this.props.input}
                id={this.props.input.name}
                type={this.props.type}
                ref={input => (this.input = input)}  >
                {this.props.children}
            </Element>
        }
        else {
          let choices = this.props.choices;
          let values = this.props.values;
          let options = '';
          choices.forEach(choice, index => {
            options += `<option value="${values[index]}">${choice}</option>`;
          })
          Element =
            <select>
              {options}
            </select>
        }

        return (
            <div className="form-row-input">
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                </label>
                {Element}
            </div>
        );
    }
}

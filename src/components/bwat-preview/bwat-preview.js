import React from 'react';
import './bwat-preview.css';

export default function BWATPreview (props) {
  return (
    <div className='bwat-preview' id={this.id}>
      <h3 className='week'>{this.props.week}</h3>
      <p className='score'>{this.props.score}</p>
      <p className='link-form'>View BWAT Form</p>//link to the BWAT form using the id
        </div>
  );
}

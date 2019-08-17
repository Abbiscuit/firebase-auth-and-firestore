import React from 'react';

const FormInput = ({ handleChange, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;

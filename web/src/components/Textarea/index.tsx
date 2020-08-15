import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={label}>{label}</label>
      <textarea id={label} {...rest}></textarea>
    </div>
  );
};

export default Textarea;

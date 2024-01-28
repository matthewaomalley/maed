import React from 'react';

const InputField = ({ label, id, placeholder, type = "text", pattern }) => (
    <div style={formFieldStyles.formField}>
        <label htmlFor={id} style={formFieldStyles.formLabel}>{label} *</label>
        <input type={type} id={id} placeholder={placeholder} pattern={pattern} style={formFieldStyles.textInput} required />
    </div>
);

// Define styles specific to FormField
const formFieldStyles = {
    formField: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '0.5rem',
    },
    formLabel: {
        // Add the specific styles for formLabel from your original styles object
        color: '#373530',
        fontSize: '14px',
        fontFamily: 'SFProMed',
    },
    textInput: {
        // Add the specific styles for textInput from your original styles object
        fontFamily: 'SFProReg',
        border: 'none',
        padding: '8px',
        marginBottom: 12,
        borderRadius: 5,
        ':focus': {
            boxShadow: '0 0 3px #aaa',
        },
    }
};

export default InputField;
import React, { useState } from 'react';

const InputField = ({ label, id, placeholder, type = "text", value, onChange, error, isRequired = false }) => {
    const [isFocused, setIsFocused] = useState(false);

    // enforce users entering correct phone number format
    const formatPhoneNumber = (input) => {
        const digits = input.replace(/\D/g, ''); // remove non-digits
        const clampedDigits = digits.substring(0, 10); // max ten digits
        const match = clampedDigits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/); // split into parts for formatting
        if (!match) return clampedDigits;
        return `${match[1]}${match[2] ? '-' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`; // format and return
    };

    // return border style object; color if field has an error or is focused; if neither, default transparent outline
    const getBorderStyle = () => ({
        border: error ? '1.5px solid red' : isFocused ? '1.5px solid #4283DB' : '1.5px solid transparent'
    });

    // component for the input field label and the error next to it
    const LabelAndError = () => (
        <div style={formFieldStyles.labelAndErrorContainer}>
            <label htmlFor={id} style={formFieldStyles.formLabel}>
                {label} {isRequired && (!value || value.trim() === '') && <span style={{ color: 'red' }}>*</span>}
            </label>
            {error && <div style={formFieldStyles.errorText}>{error}</div>}
        </div>
    );

    return (
        <div style={formFieldStyles.formField}> {/* Input field label and error, & input field below */}
            <LabelAndError id={id} label={label} error={error} isRequired={isRequired} value={value} />
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={type === 'tel' ? formatPhoneNumber(value) : value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{ ...formFieldStyles.textInput, ...getBorderStyle() }}
            />
        </div>
    );
};

const formFieldStyles = {
    formField: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '0.5rem',
    },
    labelAndErrorContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    formLabel: {
        color: '#373530',
        fontSize: '14px',
        fontFamily: 'SFProMed',
    },
    textInput: {
        fontFamily: 'SFProReg',
        outline: 'none',
        padding: '8px',
        marginBottom: 12,
        borderRadius: 5,
    },
    errorText: {
        color: 'red',
        fontSize: '10px',
        paddingLeft: '10px',
        fontFamily: 'SFProReg'
    },
};

export default InputField;
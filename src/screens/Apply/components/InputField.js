import React, { useState } from 'react';

const InputField = ({ label, id, placeholder, type = "text", value, onChange, error, isRequired = false }) => {
    const [isFocused, setIsFocused] = useState(false);

    // enforce users entering correct phone number format
    const formatPhoneNumber = (input) => {
        // Remove all non-digit characters
        const digits = input.replace(/\D/g, '');

        // Cut off at 10 digits, the typical length of a US phone number (without country code)
        const clampedDigits = digits.substring(0, 10);

        // Split the string into parts for formatting
        const match = clampedDigits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
        if (!match) return clampedDigits;

        // Format the parts and return the result
        return `${match[1]}${match[2] ? '-' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`;
    };


    // return border color if field has an error or is focused; if neither, no outline
    const getBorderStyle = () => ({
        border: error ? '1.5px solid red' : isFocused ? '1.5px solid #4283DB' : '1.5px solid transparent'
    });

    // component for the input field label and the error next to it

    const LabelAndError = ({ id, label, error, isRequired, value }) => (
        <div style={formFieldStyles.labelAndErrorContainer}>
            <label htmlFor={id} style={formFieldStyles.formLabel}>
                {label} {isRequired && (!value || value.trim() === '') && <span style={{ color: 'red' }}>*</span>}
            </label>
            {error && <div style={formFieldStyles.errorText}>{error}</div>}
        </div>
    );

    return (
        <div style={formFieldStyles.formField}>
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
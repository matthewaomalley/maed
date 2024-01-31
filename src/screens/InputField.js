import React, { useState } from 'react';

const InputField = ({ title, label, id, placeholder, type = "text", value, onChange, error, isRequired = false }) => {
    const [isFocused, setIsFocused] = useState(false);

    const formatPhoneNumber = (input) => {
        const digits = input.replace(/\D/g, ''); // remove non-digits
        const clampedDigits = digits.substring(0, 10); // max ten digits
        const match = clampedDigits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/); // split into parts for formatting
        if (!match) return clampedDigits;
        return `${match[1]}${match[2] ? '-' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`; // format and return
    };

    const getBorderStyle = () => ({
        border: error ? '1.5px solid red' : isFocused ? '1.5px solid #4283DB' : '1.5px solid transparent'
    });

    const LabelAndError = () => (
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

const ResumeUpload = ({ title, label, onUpload, isRequired = false, error }) => {
    const [fileSelected, setFileSelected] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileSelected(true);
            onUpload(event.target.files[0]);
        } else {
            setFileSelected(false);
            onUpload(null);
        }
    };

    const uploadButtonTextStyle = {
        ...resumeUploadStyles.resumeUploadButtonText,
        textDecoration: isHovered ? 'underline' : 'none',
    };

    const uploadButtonStyle = {
        ...resumeUploadStyles.resumeUploadButton,
        border: fileSelected || !error ? '2px dashed #D7E5EE' : '2px dashed red'
    };

    return (
        <div style={{ ...resumeUploadStyles.applicationFormLabel, display: 'flex', flexDirection: 'column', marginBottom: '0.2rem' }}>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label htmlFor="resume" style={resumeUploadStyles.formLabel}>
                    {label} {isRequired && !fileSelected && <span style={{ color: 'red' }}>*</span>}
                </label>
                {!fileSelected && error && <span style={resumeUploadStyles.errorText}>{error}</span>}
            </div>
            <div style={uploadButtonStyle}>
                <span style={resumeUploadStyles.greyText}>Drag and Drop or </span>
                <span
                    style={uploadButtonTextStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => document.getElementById('resume').click()}>Attach File
                </span>
            </div>
            <p style={{ ...resumeUploadStyles.greyText, fontSize: 10, marginTop: 4 }}>Accepted file types: .pdf, .doc, .docx, .txt</p>
            <input
                type="file"
                id="resume"
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
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
        marginBottom: '2px'
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

const resumeUploadStyles = {
    applicationFormLabel: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '0.2rem'
    },
    formLabel: {
        color: '#373530',
        fontSize: '14px',
        fontFamily: 'SFProMed',
    },
    resumeUploadButton: {
        border: '2px dashed #D7E5EE',
        backgroundColor: '#f0f3f4',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
        pointerEvents: 'none',
        paddingBottom: '12px',
    },
    resumeUploadButtonText: {
        color: '#4283DB',
        cursor: 'pointer',
        pointerEvents: 'auto',
        fontFamily: 'SFProReg',
        fontSize: 14,
    },
    greyText: {
        color: '#AAAAAA',
        fontFamily: 'SFProReg',
        fontSize: 14
    },
    errorText: {
        color: 'red',
        fontSize: '10px',
        paddingLeft: '10px',
        fontFamily: 'SFProReg'
    },
};

export { InputField, ResumeUpload };
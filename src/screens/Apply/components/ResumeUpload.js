import React, { useState } from 'react';

const ResumeUpload = ({ label, onUpload, isRequired = false, error }) => {
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
            <div style={{display: 'flex', alignItems: 'center'}}>
                <label htmlFor="resume" style={resumeUploadStyles.formLabel}>
                    {label} {isRequired && !fileSelected && <span style={{color: 'red'}}>*</span>}
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
            <p style={{...resumeUploadStyles.greyText, fontSize: 10, marginTop: 4}}>Accepted file types: .pdf, .doc, .docx, .txt</p>
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

const resumeUploadStyles = {
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

export default ResumeUpload;
import React from 'react';

const ResumeUpload = ({ label }) => (
    <div style={{ ...resumeUploadStyles.applicationFormLabel, display: 'flex', flexDirection: 'column', marginBottom: '0.5rem' }}>
        <label htmlFor="resume" style={resumeUploadStyles.formLabel}>{label} *</label>
        <div style={resumeUploadStyles.resumeUploadButton}>
            <span style={resumeUploadStyles.greyText}>Drag and Drop or</span>
            <span
                style={resumeUploadStyles.resumeUploadButtonText}
                onClick={() => document.getElementById('resume').click()}> Attach File
            </span>
        </div>
        <p style = {{...resumeUploadStyles.greyText, fontSize: 10, marginTop: 4 }}>Accepted file types: .pfd .doc .docx .txt .rtf</p>
        <input
            type="file"
            id="resume"
            style={{ display: 'none' }}
            accept=".pdf,.doc,.docx"
        />
    </div>
);

const resumeUploadStyles = {
    resumeUpload: {
        display: 'flex', 
        flexDirection: 'column', 
        marginBottom: '0.5rem'
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
        paddingBottom: '12px'
    },
    resumeUploadButtonText: {
        color: '#4283DB',
        cursor: 'pointer',
        pointerEvents: 'auto',
        fontSize: 14
    },
    greyText: {
        color: '#AAAAAA',
        fontFamily: 'SFProReg',
        fontSize: 14
    },
};

export default ResumeUpload;
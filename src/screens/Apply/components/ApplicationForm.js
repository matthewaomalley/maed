import React from 'react';
import ResumeUpload from './ResumeUpload';
import InputField from './InputField';

const ApplicationForm = ({ }) => (
    <div className="col-md-5" style={{ ...applicationFormStyles.box, backgroundColor: '#F6F6F6', padding: 20 }}>
        <form>
            <p style={{ ...applicationFormStyles.title, fontFamily: 'SFProBold', paddingBottom: 5 }}>Application</p>
            <div>
                <InputField label="First Name" id="firstName" placeholder="Johnny" applicationFormStyles={applicationFormStyles} />
                <InputField label="Last Name" id="lastName" placeholder="Appleseed" applicationFormStyles={applicationFormStyles} />
                <InputField label="Email" id="email" placeholder="username@gmail.com" applicationFormStyles={applicationFormStyles} />
                <InputField label="Phone" type="tel" id="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" applicationFormStyles={applicationFormStyles} />
                <ResumeUpload label="Attach Resume" applicationFormStyles={applicationFormStyles} />
                <ResumeUpload label="Cover Letter" applicationFormStyles={applicationFormStyles} />
            </div>
            <button type="submit" style={applicationFormStyles.submitButton}><span style={applicationFormStyles.submitButtonText}>Submit Application</span></button>
        </form>
    </div>
);

const applicationFormStyles = {
    box: {
        boxSizing: 'border-box',
        border: '12px solid transparent',
        backgroundClip: 'padding-box',
        padding: 0,
        borderRadius: 15
    },
    title: {
        fontSize: 22,
        fontFamily: 'SFProMed',
        marginBottom: 5
    },
    submitButton: {
        backgroundColor: '#4283db',
        borderRadius: 5,
        padding: 5,
        paddingBottom: 8,
        outline: 'none',
        border: 'none',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 14,
        paddingLeft: 5,
        paddingRight: 5,
        fontFamily: 'SFProMed',
    },
};

export default ApplicationForm;
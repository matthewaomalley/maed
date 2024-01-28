import React, { useState } from 'react';
import ResumeUpload from './ResumeUpload';
import InputField from './InputField';

const ApplicationForm = () => {
    const [errors, setErrors] = useState({});
    const [createAccountCheckBox, setCreateAccountCheckBox] = useState(false);
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    // format label taken from field identifier
    const formatLabel = (field) => {
        return field
            .replace(/([A-Z])/g, ' $1') // split camel case word into string
            .replace(/^./, (str) => str.toUpperCase()); // capitalize 
    };

    // input validation for each field
    const validateField = (name, value) => {
        const isRequired = ' is required';
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

        switch (name) {
            case 'firstName':
            case 'lastName':
                return !value.trim() ? `${name.split(/(?=[A-Z])/).join(" ")}${isRequired}` : '';
            case 'email':
                return !value.trim() ? `Email${isRequired}` : !emailRegex.test(value) ? 'Invalid Email' : '';
            case 'phone':
                return !value.trim() ? `Phone Number${isRequired}` : !phoneRegex.test(value) ? 'Invalid Phone Number' : '';
            default:
                return '';
        }
    };

    // input validation for form submission
    const validateForm = () => {
        let newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) {
                newErrors[key] = error;
            }
        });

        if (!resume) {
            newErrors.resume = 'Resume is required'
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // when field changes, update new value in form data state & clear errors
    const handleInputChange = (field) => (event) => {
        const value = event.target.value;
        setFormData(prevFormData => ({
            ...prevFormData,
            [field]: value
        }));
        if (errors[field]) {
            setErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
        }
    };

    // submit the form if it passes validation
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted", formData);
        }
        // will need to do stuff here to submit it, right now, does nothing
    };

    // set placeholders for input fields
    const getPlaceholder = (field) => {
        switch (field) {
            case 'firstName':
                return 'Johnny';
            case 'lastName':
                return 'Appleseed';
            case 'email':
                return 'username@gmail.com';
            case 'phone':
                return '123-456-7890';
            default:
                return '';
        }
    };

    const handleResumeUpload = (file) => {
        setResume(file);
        if (file) {
            setErrors(prevErrors => ({ ...prevErrors, resume: '' }));
        }
    };

    const handleCoverLetterUpload = (file) => {
        setCoverLetter(file);
    };

    return (
        <div className="col-md-5" style={{ ...applicationFormStyles.box, backgroundColor: '#F6F6F6', padding: 20 }}>
            <form noValidate onSubmit={handleSubmit}>
                <p style={{ ...applicationFormStyles.title, fontFamily: 'SFProBold', paddingBottom: 5 }}>Application</p>
                {['firstName', 'lastName', 'email', 'phone'].map(field => (
                    <InputField
                        key={field}
                        label={formatLabel(field)}
                        id={field}
                        placeholder={getPlaceholder(field)}
                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                        value={formData[field]}
                        onChange={handleInputChange(field)}
                        error={errors[field]}
                    />
                ))}
                <ResumeUpload label="Attach Resume" onUpload={handleResumeUpload} error={errors.resume} />
                <ResumeUpload label="Cover Letter" onUpload={handleCoverLetterUpload} />

                <div style={applicationFormStyles.formFooter}>
                    <div style={applicationFormStyles.checkboxContainer}>
                        <input
                            type="checkbox"
                            checked={createAccountCheckBox}
                            onChange={() => setCreateAccountCheckBox(!createAccountCheckBox)}
                            style={applicationFormStyles.checkbox}
                        />
                        <label style={applicationFormStyles.checkboxLabel}>
                            Save information for next application
                        </label>
                    </div>
                    <button type="submit" style={applicationFormStyles.submitButton}>
                        <span style={applicationFormStyles.submitButtonText}>Submit</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

const applicationFormStyles = {
    box: {
        boxSizing: 'border-box',
        border: '12px solid transparent',
        backgroundClip: 'padding-box',
        padding: '20px 0 0 0',
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
    formFooter: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '20px'
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    checkbox: {
        marginRight: '10px',
        marginTop: '4px'
    },
    checkboxLabel: {
        fontFamily: 'SFProReg',
        fontSize: '14px',
        maxWidth: '300px',
        paddingRight: '20px'
    },
}
export default ApplicationForm;
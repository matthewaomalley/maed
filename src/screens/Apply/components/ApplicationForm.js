import React, { useState } from 'react';
import ResumeUpload from './ResumeUpload';
import InputField from './InputField';
import Modal from '../../Modal'

const ApplicationForm = ({ onFormSubmit }) => {
    const [errors, setErrors] = useState({});
    const [createAccountCheckBox, setCreateAccountCheckBox] = useState(false);
    const [resume, setResume] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [coverLetter, setCoverLetter] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume
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

        // Function to split camelCase and capitalize each word
        const formatFieldName = (fieldName) => {
            return fieldName
                // Split camelCase into words
                .replace(/([A-Z])/g, ' $1')
                // Capitalize the first letter of each word
                .replace(/^./, str => str.toUpperCase())
                .replace(/ /g, ' '); // Replace spaces with a single space
        };

        switch (name) {
            case 'firstName':
            case 'lastName':
                if (!value.trim()) {
                    return `${formatFieldName(name)}${isRequired}`;
                }
                break;
            case 'email':
                if (!value.trim()) return `Email${isRequired}`;
                if (!emailRegex.test(value)) return 'Invalid Email';
                break;
            case 'phone':
                if (!value.trim()) return `Phone Number${isRequired}`;
                if (!phoneRegex.test(value)) return 'Invalid Phone Number';
                break;
            case 'resume':
                return value ? '' : 'Resume is required';
            default:
                return '';
        }
        return '';
    };


    // input validation for form submission
    const validateForm = () => {
        let newErrors = {};

        // Validate fields in formData
        Object.keys(formData).forEach(key => {
            if (key !== 'resume') {  // Skip resume in formData
                const error = validateField(key, formData[key]);
                if (error) {
                    newErrors[key] = error;
                }
            }
        });

        // Validate the resume from the state
        const resumeError = validateField('resume', resume);
        if (resumeError) {
            newErrors['resume'] = resumeError;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    // when field changes, update new value in form data state & clear errors
    const handleInputChange = (field) => (event) => {
        let { value } = event.target;

        // Restrict the length of the phone number to a maximum of 12 characters
        if (field === 'phone' && value.length > 12) {
            value = value.slice(0, 12);
        }

        setFormData(prevFormData => ({
            ...prevFormData,
            [field]: value
        }));

        // Clear any errors for this field
        if (errors[field]) {
            setErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
        }
    };


    // submit the form if it passes validation
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            console.log("Form Submitted", formData);
            setIsModalOpen(true);  // Open the modal
            onFormSubmit();        // Notify Apply component about the submission
        }
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
        <div style={{ ...applicationFormStyles.box, backgroundColor: '#F6F6F6', padding: 20 }}>
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    {/* Modal content */}
                    <h2>Submission Successful</h2>
                    <p>Your form has been submitted successfully.</p>
                    <button onClick={() => setIsModalOpen(false)}>Close</button>
                </Modal>
            )}

            {!isModalOpen && (
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
                            isRequired={true} // render asterisk
                        />
                    ))}
                    <ResumeUpload label="Attach Resume" onUpload={handleResumeUpload} error={errors.resume} isRequired={true} />
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
            )}
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
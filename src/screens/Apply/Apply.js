import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component imports
import JobInfo from './components/JobInfo';
import JobDescription from './components/JobDescription';
import ApplicationForm from './components/ApplicationForm';
import Header from '../Header'
import Modal from '../Modal'
import SuccessBanner from '../SuccessBanner';

const Apply = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFormSubmission = () => {
        setIsSubmitted(true);
        setIsModalOpen(true); // Open the modal upon submission
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{ backgroundColor: '#FCFCFC' }}>
            <Header />
            <div className="container mt-2 mb-4">
                {/* Row for JobInfo */}
                <div className={`row ${isSubmitted ? 'justify-content-center' : ''}`}>
                    <div className={isSubmitted ? "col-7" : "col-md-7"}>
                        <JobInfo />
                    </div>
                </div>

                {/* Row for SuccessBanner, centered and same width as JobInfo */}
                {isSubmitted && (
                    <div className="row justify-content-center">
                        <div className="col-7">
                            <SuccessBanner />
                        </div>
                    </div>
                )}

                {/* Row for JobDescription and ApplicationForm */}
                <div className={`row align-items-start ${isSubmitted ? 'justify-content-center' : ''}`}>
                    <div className={isSubmitted ? "col-7" : "col-md-7"}>
                        <JobDescription />
                    </div>

                    {/* ApplicationForm is only shown if not submitted */}
                    {!isSubmitted && (
                        <div className="col-md-5">
                            <ApplicationForm onFormSubmit={handleFormSubmission} />
                        </div>
                    )}
                </div>
            </div>

            {/* Modal component */}
            {isSubmitted && (
                <Modal isOpen={isModalOpen} onClose={closeModal} headerText="Submission Successful" contentText="Your form has been submitted successfully." />
            )}
        </div>
    );
};
export default Apply;
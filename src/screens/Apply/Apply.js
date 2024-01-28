import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component imports
import JobInfo from './components/JobInfo';
import JobDescription from './components/JobDescription';
import ApplicationForm from './components/ApplicationForm';

const Apply = () => {
    return (
        <div className="container mt-4">

            {/* Top Column Job Info */}
            <div className="row">
                <JobInfo />
            </div>

            <div className="row align-items-start">

                {/* Left Column for Job Description */}
                <JobDescription />

                {/* Right Column Application Form */}
                <ApplicationForm />
            </div>
        </div>
    );
};

export default Apply;

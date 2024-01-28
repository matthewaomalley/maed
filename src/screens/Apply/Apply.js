import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component imports
import JobInfo from './components/JobInfo';
import JobDescription from './components/JobDescription';
import ApplicationForm from './components/ApplicationForm';
import Header from '../Header'

const Apply = () => {
    return (
        <div style = {{backgroundColor: '#FCFCFC'}}>
            <Header />
            <div className="container mt-2 mb-4">

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
        </div>
    );
};

export default Apply;

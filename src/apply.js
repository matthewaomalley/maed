import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoUsd } from "react-icons/io";
import { LuDot } from "react-icons/lu";

const FormField = ({ label, id, placeholder, type = "text", pattern, styles }) => (
    <div style={styles.applicationFormLabel}>
        <label htmlFor={id} style={styles.formLabel}>{label} *</label>
        <input type={type} id={id} placeholder={placeholder} pattern={pattern} style={styles.textInput} required />
    </div>
);

const Apply = () => {
    return (
        <div className="container mt-5">

            {/* Top Column Job Info */}
            <div className="row">
                <div className="col-md-6" style={styles.box}>
                    <p style={{ ...styles.title, fontFamily: 'SFProBold', marginBottom: -4 }}>Junior Frontend Developer</p>
                    <p style={styles.greyedSubText}>at Viderity Inc.</p>
                    <p style={{ marginTop: -8 }}><span style={{ ...styles.chipSpan, ...styles.subtitle, color: '#1F3345' }}><FaLocationDot style={{ fontSize: '16px', color: '#6996ba', marginBottom: 3, marginRight: 4 }} />Alexandria, VA</span></p>
                </div>
            </div>

            <div className="row align-items-start">

                {/* Left Column for Job Description */}
                <JobDescription styles={styles} />

                {/* Right Column Application Form */}
                <ApplicationForm styles={styles} FormField={FormField} />

            </div>
        </div>
    );
};

const customBullet = <LuDot style={{ color: 'black', marginRight: '2px', paddingBottom: 1, fontSize: '22px' }} />;

const JobDescription = ({ styles }) => (
    <div className="col-md-6" style={{ ...styles.box }}>

        <p style={styles.bodytext}>Viderity is an award-winning consulting firm that provides IT and outreach services to federal agencies and commercial organizations. You'll be working with a friendly and whip-smart team supporting a well-known organization responsible for exciting discoveries ranging from the first internet browser to black holes to the first semiconductor!</p>

        <p style={styles.subtitle}>Job Description</p>
        <p style={styles.bodytext}>We are currently seeking a highly motivated and skilled Junior Frontend Developer to join our dynamic team at Viderity, supporting the National Science Foundation. As a Junior Frontend Developer, you will design, develop, and implement web-based client applications using a variety front-end tools and technologies to support business requirements. You will also follow approved Agile life cycle methodologies, adhere to modern JavaScript coding standards, and perform related front-end tasks including resolving technical issues through debugging, research, and investigation.</p>

        <p style={styles.subtitle}>Required Skills</p>
        <ul style={{ ...styles.bodytext, listStyle: 'none' }}>
            <li style={styles.listItem}>
                <span>{customBullet}</span>
                <span>Strong experience developing client-side applications using modern JavaScript frameworks like Ember, React, Vue, or Angular</span>
            </li>
            <li style={styles.listItem}>
                <span>{customBullet}</span>
                <span>Experience with HTML, Handlebars, CSS, SASS, and Bootstrap</span>
            </li>
            <li style={styles.listItem}>
                <span>{customBullet}</span>
                <span>Extensive experience writing front-end automated tests using common JavaScript testing frameworks like qunit, mocha, jest, etc.</span>
            </li>
            <li style={styles.listItem}>
                <span>{customBullet}</span>
                <span>Working knowledge of DevOps-related tools like Jenkins, Bitbucket, and Git</span>
            </li>
            <li style={styles.listItem}>
                <span>{customBullet}</span>
                <span>Experience providing production support and issue resolution</span>
            </li>
        </ul>

        <p style={{ ...styles.subtitle }}>Preferred Skills</p>
        <ul style={{ ...styles.bodytext, listStyle: 'none' }}>
            <li style={styles.listItem}>
                <span>{customBullet}</span>
                <span>TypeScript development experience</span>
            </li>
            <li style={styles.listItem}>
                <span>{customBullet}</span>
                <span>Experience working within a Scaled Agile (SAFe) development environment</span>
            </li>
            <li style={styles.listItem}>
                <span>{customBullet}</span>
                <span>Experience with Atlassian Suite of tools, including Jira and Confluence</span>
            </li>
            <li style={styles.listItem}>
                <span>{customBullet}</span>
                <span>Possession of excellent communication and teamwork skills</span>
            </li>
        </ul>

        <p style={{ ...styles.subtitle, marginBottom: 5 }}>Salary Range</p>
        <p><span style={{ ...styles.chipSpan, ...styles.subtitle, backgroundColor: '#dfecdd', color: '#1F3345' }}><IoLogoUsd style={{ fontSize: '16px', color: '#769a7f', marginBottom: 3 }} />60,000 - 72,000 per year</span></p>

        <p style={{ ...styles.subtitle, marginBottom: 5, paddingTop: 25 }}>Benefits</p>
        <div style={styles.benefitsGrid}>
            <div><span style={{ ...styles.chipSpan, backgroundColor: 'lightgrey' }}>401(k)</span></div>
            <div><span style={{ ...styles.chipSpan, backgroundColor: 'lightgrey' }}>Health Insurance</span></div>
            <div><span style={{ ...styles.chipSpan, backgroundColor: 'lightgrey' }}>Paid Time Off</span></div>
            <div><span style={{ ...styles.chipSpan, backgroundColor: 'lightgrey' }}>Remote Work</span></div>
        </div>
    </div>
);

const ApplicationForm = ({ styles, FormField }) => (
    <div className="col-md-6" style={{ ...styles.box, backgroundColor: '#F6F6F6', padding: 20 }}>
        <form>
            <p style={{ ...styles.title, fontFamily: 'SFProBold' }}>Application</p>
            <div>
                <FormField label="First Name" id="firstName" placeholder="Johnny" styles={styles} />
                <FormField label="Last Name" id="lastName" placeholder="Appleseed" styles={styles} />
                <FormField label="Email" id="email" placeholder="username@gmail.com" styles={styles} />
                <FormField label="Phone" type="tel" id="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" styles={styles} />
            </div>
            <button type="submit" style={styles.submitButton}><span style={styles.submitButtonText}>Submit Application</span></button>
        </form>
    </div>
);

const styles = {
    box: {
        boxSizing: 'border-box',
        border: '12px solid transparent',
        backgroundClip: 'padding-box',
        padding: 0,
        borderRadius: 15
    },
    asterisk: {
        color: '#FF5943',
        fontSize: 10,
        verticalAlign: 'top',
    },
    title: {
        fontSize: 22,
        fontFamily: 'SFProMed',
        marginBottom: 5
    },
    bodytext: {
        fontSize: 16,
        color: '#373530',
        fontFamily: 'SFProReg',
        padding: 0,
    },
    subtitle: {
        fontSize: 16,
        color: '#373530',
        fontFamily: 'SFProMed',
        marginBottom: 5,
    },
    greyedSubText: {
        fontSize: 16,
        color: '#9B9A97',
        fontFamily: 'SFProReg'
    },
    chipSpan: {
        fontSize: 16,
        color: '#373530',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#d7e5ee',
        borderRadius: 15,
        paddingBottom: 4,
        paddingTop: 4
    },
    benefitsGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '4px',
        paddingTop: 2,
    },
    submitButton: {
        backgroundColor: '#4283db',
        borderRadius: 5,
        padding: 5,
        paddingBottom: 8,
        outline: 'none',
        border: 'none',
        marginTop: 10,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 14,
        paddingLeft: 5,
        paddingRight: 5,
        fontFamily: 'SFProMed',
    },
    formLabel: {
        color: '#373530',
        fontSize: '14px',
        fontFamily: 'SFProMed',
    },
    textInput: {
        fontFamily: 'SFProReg',
        border: 'none',

        padding: '8px',
        ':focus': {
            boxShadow: '0 0 3px #aaa',
        },
        marginBottom: 12,
        borderRadius: 5
    },
    listItem: {
        display: 'flex'
    },
};

export default Apply;
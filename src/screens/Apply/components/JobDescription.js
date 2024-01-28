import React from 'react';
import { IoLogoUsd } from "react-icons/io";
import { LuDot } from "react-icons/lu";

const customBullet = <LuDot style={{ color: 'black', marginRight: '2px', paddingBottom: 1, fontSize: '22px' }} />;

const JobDescription = ({ }) => (
    <div className="col-md-7" style={{ ...jobDescriptionStyles.box }}>

        <p style={jobDescriptionStyles.bodytext}>Viderity is an award-winning consulting firm that provides IT and outreach services to federal agencies and commercial organizations. You'll be working with a friendly and whip-smart team supporting a well-known organization responsible for exciting discoveries ranging from the first internet browser to black holes to the first semiconductor!</p>

        <p style={jobDescriptionStyles.subtitle}>Job Description</p>
        <p style={jobDescriptionStyles.bodytext}>We are currently seeking a highly motivated and skilled Junior Frontend Developer to join our dynamic team at Viderity, supporting the National Science Foundation. As a Junior Frontend Developer, you will design, develop, and implement web-based client applications using a variety front-end tools and technologies to support business requirements. You will also follow approved Agile life cycle methodologies, adhere to modern JavaScript coding standards, and perform related front-end tasks including resolving technical issues through debugging, research, and investigation.</p>

        <p style={jobDescriptionStyles.subtitle}>Required Skills</p>
        <ul style={{ ...jobDescriptionStyles.bodytext, listStyle: 'none' }}>
            <li style={jobDescriptionStyles.listItem}>
                <span>{customBullet}</span>
                <span>Strong experience developing client-side applications using modern JavaScript frameworks like Ember, React, Vue, or Angular</span>
            </li>
            <li style={jobDescriptionStyles.listItem}>
                <span>{customBullet}</span>
                <span>Experience with HTML, Handlebars, CSS, SASS, and Bootstrap</span>
            </li>
            <li style={jobDescriptionStyles.listItem}>
                <span>{customBullet}</span>
                <span>Extensive experience writing front-end automated tests using common JavaScript testing frameworks like qunit, mocha, jest, etc.</span>
            </li>
            <li style={jobDescriptionStyles.listItem}>
                <span>{customBullet}</span>
                <span>Working knowledge of DevOps-related tools like Jenkins, Bitbucket, and Git</span>
            </li>
            <li style={jobDescriptionStyles.listItem}>
                <span>{customBullet}</span>
                <span>Experience providing production support and issue resolution</span>
            </li>
        </ul>

        <p style={{ ...jobDescriptionStyles.subtitle }}>Preferred Skills</p>
        <ul style={{ ...jobDescriptionStyles.bodytext, listStyle: 'none' }}>
            <li style={jobDescriptionStyles.listItem}>
                <span>{customBullet}</span>
                <span>TypeScript development experience</span>
            </li>
            <li style={jobDescriptionStyles.listItem}>
                <span>{customBullet}</span>
                <span>Experience working within a Scaled Agile (SAFe) development environment</span>
            </li>
            <li style={jobDescriptionStyles.listItem}>
                <span>{customBullet}</span>
                <span>Experience with Atlassian Suite of tools, including Jira and Confluence</span>
            </li>
            <li style={jobDescriptionStyles.listItem}>
                <span>{customBullet}</span>
                <span>Possession of excellent communication and teamwork skills</span>
            </li>
        </ul>

        <p style={{ ...jobDescriptionStyles.subtitle, marginBottom: 5 }}>Salary Range</p>
        <p><span style={{ ...jobDescriptionStyles.chipSpan, ...jobDescriptionStyles.subtitle, backgroundColor: '#dfecdd', color: '#1F3345' }}><IoLogoUsd style={{ fontSize: '16px', color: '#769a7f', marginBottom: 3 }} />60,000 - 72,000 per year</span></p>

        <p style={{ ...jobDescriptionStyles.subtitle, marginBottom: 5, paddingTop: 25 }}>Benefits</p>
        <div style={jobDescriptionStyles.benefitsGrid}>
            <div><span style={{ ...jobDescriptionStyles.chipSpan, backgroundColor: 'lightgrey' }}>401(k)</span></div>
            <div><span style={{ ...jobDescriptionStyles.chipSpan, backgroundColor: 'lightgrey' }}>Health Insurance</span></div>
            <div><span style={{ ...jobDescriptionStyles.chipSpan, backgroundColor: 'lightgrey' }}>Paid Time Off</span></div>
            <div><span style={{ ...jobDescriptionStyles.chipSpan, backgroundColor: 'lightgrey' }}>Remote Work</span></div>
        </div>
    </div>
);

const jobDescriptionStyles = {
    box: {
        boxSizing: 'border-box',
        border: '12px solid transparent',
        backgroundClip: 'padding-box',
        padding: 0,
        borderRadius: 15
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
    chipSpan: {
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: 16,
        color: '#373530',
        backgroundColor: '#d7e5ee',
        borderRadius: 15,
        padding: '4px 10px',
        fontFamily: 'SFProMed'
    },
    listItem: {
        display: 'flex'
    }
};

export default JobDescription;

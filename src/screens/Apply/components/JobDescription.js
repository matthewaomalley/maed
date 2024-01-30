import React from 'react';
import { IoLogoUsd } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { IconChip, ChipList } from '../../Chips';

const customBullet = <LuDot style={{ color: 'black', marginRight: '2px', paddingBottom: 1, fontSize: '22px' }} />;

const JobDescription = ({ }) => (
    <div style={{ ...jobDescriptionStyles.box }}>

        <p style={jobDescriptionStyles.bodytext}>Google is an award-winning consulting firm that provides IT and outreach services to federal agencies and commercial organizations. You'll be working with a friendly and whip-smart team supporting a well-known organization responsible for exciting discoveries ranging from the first internet browser to black holes to the first semiconductor!</p>

        <p style={jobDescriptionStyles.subtitle}>Job Description</p>
        <p style={jobDescriptionStyles.bodytext}>We are currently seeking a highly motivated and skilled Junior Frontend Developer to join our dynamic team at Google, supporting the National Science Foundation. As a Junior Frontend Developer, you will design, develop, and implement web-based client applications using a variety front-end tools and technologies to support business requirements. You will also follow approved Agile life cycle methodologies, adhere to modern JavaScript coding standards, and perform related front-end tasks including resolving technical issues through debugging, research, and investigation.</p>

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

        <p style={{ ...jobDescriptionStyles.subtitle, paddingTop: '10px' }}>Salary Range</p>
        <IconChip
            icon={<IoLogoUsd />}
            text="60,000 - 72,000 per year"
            backgroundColor="#dfecdd"
            iconColor="#769a7f"
            textColor="#1F3345"
        />

        <p style={{ ...jobDescriptionStyles.subtitle, paddingTop: '10px' }}>Benefits</p>
        <div style={jobDescriptionStyles.benefitsGrid}>
            <ChipList
                items={[
                    { text: "401(k)" },
                    { text: "Health Insurance" },
                    { text: "Paid Time Off" },
                    { text: "Remote Work" }
                ]}
                backgroundColor="#EFEFEF"
            />
        </div>

    </div>
);

const jobDescriptionStyles = {
    box: {
        boxSizing: 'border-box',
        border: '12px solid transparent',
        backgroundClip: 'padding-box',
        padding: '0 20px 0 0',
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
    listItem: {
        display: 'flex'
    }
};

export default JobDescription;
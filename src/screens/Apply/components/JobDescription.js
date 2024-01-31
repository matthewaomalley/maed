import React from 'react';
import { IoLogoUsd } from "react-icons/io";
import { IconChip, ChipList } from '../../Chips';
import TextSection from '../../TextSection';

const JobDescription = ({ }) => (
    <div style={{ ...jobDescriptionStyles.box }}>

        <TextSection
            text="Google is an award-winning consulting firm that provides IT and outreach services to federal agencies and commercial organizations. You'll be working with a friendly and whip-smart team supporting a well-known organization responsible for exciting discoveries ranging from the first internet browser to black holes to the first semiconductor!"
        />

        <TextSection
            title="Job Description"
            text="We are currently seeking a highly motivated and skilled Junior Frontend Developer to join our dynamic team at Google, supporting the National Science Foundation. As a Junior Frontend Developer, you will design, develop, and implement web-based client applications using a variety front-end tools and technologies to support business requirements. You will also follow approved Agile life cycle methodologies, adhere to modern JavaScript coding standards, and perform related front-end tasks including resolving technical issues through debugging, research, and investigation."
        />

        <TextSection
            title="Required Skills"
            text={["Strong experience with JavaScript", "Experience with HTML/CSS", "Knowledge of React"]}
            isBulletList={true}
        />

        <TextSection
            title="Preferred Skills"
            text={["TypeScript development experience", "Experience working within a Scaled Agile (SAFe) development environment",
                "Experience with Atlassian Suite of tools, including Jira and Confluence", "Possession of excellent communication and teamwork skills"]}
            isBulletList={true}
        />

        <IconChip
            title="Salary Range"
            icon={<IoLogoUsd />}
            text="60,000 - 72,000 per year"
            backgroundColor="#dfecdd"
            iconColor="#769a7f"
            textColor="#1F3345"
        />

        <ChipList
            title="Benefits"
            items={[
                { text: "401(k)" },
                { text: "Health Insurance" },
                { text: "Paid Time Off" },
                { text: "Remote Work" }
            ]}
            backgroundColor="#EFEFEF"
        />
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
};

export default JobDescription;
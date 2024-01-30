import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconChip, ChipList } from '../../Chips';

const JobInfo = () => {
    return (
        <div style={jobInfoStyles.box}>
            <p style={jobInfoStyles.title}>Junior Frontend Developer</p>
            <div style={jobInfoStyles.companyAndIconContainer}>
                <p style={jobInfoStyles.greyedSubText}>at Google</p>
                <FaLongArrowAltRight style={jobInfoStyles.arrowIcon} />
                <p style={jobInfoStyles.moreJobsText}>View All Jobs</p>
            </div>
            <p style={{ marginTop: -8 }}>
                <IconChip
                    icon={<FaLocationDot />}
                    text="Alexandria, VA."
                    backgroundColor="#d7e5ee"
                    iconColor="#6996ba"
                    textColor="#1F3345"
                />
            </p>
        </div>
    );
};

const jobInfoStyles = {
    box: {
        boxSizing: 'border-box',
        border: '12px solid transparent',
        backgroundClip: 'padding-box',
        padding: 0,
        borderRadius: 15
    },
    title: {
        fontSize: 22,
        fontFamily: 'SFProBold',
        marginBottom: -4
    },
    greyedSubText: {
        fontSize: 16,
        color: '#9B9A97',
        fontFamily: 'SFProReg'
    },
    locationIcon: {
        fontSize: '16px',
        color: '#6996ba',
        marginRight: 4
    },
    companyAndIconContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    moreJobsText: {
        fontFamily: 'SFProReg',
        fontSize: 14,
        color: '#4283db',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
        paddingTop: '2px'
    },
    arrowIcon: {
        marginLeft: '5px',
        marginRight: '5px',
        color: '#4283db',
        fontSize: 14,
        marginBottom: 14,
        marginLeft: 10,
    },
};

export default JobInfo;

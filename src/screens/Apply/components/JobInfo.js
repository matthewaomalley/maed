import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

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
                <span style={jobInfoStyles.chipSpan}>
                    <FaLocationDot style={jobInfoStyles.locationIcon} />
                    Mountain View, CA.
                </span>
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

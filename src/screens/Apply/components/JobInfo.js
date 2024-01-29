import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const JobInfo = () => {
    return (
        <div style={{...jobInfoStyles.box}}>
            <p style={jobInfoStyles.title}>Junior Frontend Developer</p>
            <p style={jobInfoStyles.greyedSubText}>at Viderity Inc.</p>
            <p style={{ marginTop: -8 }}>
                <span style={jobInfoStyles.chipSpan}>
                    <FaLocationDot style={jobInfoStyles.locationIcon} />
                    Alexandria, VA
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
    }
};

export default JobInfo;

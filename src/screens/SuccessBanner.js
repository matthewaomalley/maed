import React from 'react';

const SuccessBanner = () => {
    return (
        <div style={successBannerStyles.box}>
            <div style={successBannerStyles.content}>
                <h2 style={successBannerStyles.headerText}>Applied</h2>
                <p style={successBannerStyles.contentText}>1/29/2024</p>
            </div>
        </div>
    );
};

const successBannerStyles = {
    box: {
        backgroundColor: '#eff9f1',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',            
        margin: '0px 10px 10px 10px',
        boxSizing: 'border-box',
    },
    content: {
        padding: '5px'
    },
    headerText: {
        marginTop: 0,
        marginBottom: 0,
        fontFamily: 'SFProMed',
        fontSize: 16,
        textAlign: 'center'
    },
    contentText: {
        marginTop: 0,
        marginBottom: '5px',
        fontFamily: 'SFProReg',
        fontSize: 10,
        marginTop: '2px',
        textAlign: 'center'
    }
};

export default SuccessBanner;

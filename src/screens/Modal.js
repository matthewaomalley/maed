import React from 'react';

const Modal = ({ isOpen, onClose, headerText, contentText, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div style={modalStyles.modal}>
        <div style={modalStyles.content}>
            <div style={modalStyles.header}>
                <p style={modalStyles.headerText}>Job Applied!</p>
                <button style={modalStyles.x} onClick={onClose}>&times;</button>
            </div>
                <div style={modalStyles.image}>
                    <img src={imageSrc} alt="Image here" />
                </div>
                <p style={{ ...modalStyles.headerText, padding: '10px' }}>Your application has been submitted to: Viderity, Inc.</p>
                <p>content text</p>
                <div style={modalStyles.footer}>
                    <button
                        onClick={onClose}
                        style={modalStyles.doneButton}
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};
const modalStyles = {
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    content: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '80%',
        textAlign: 'center',
    },
    header: {
        position: 'relative', // Set the header container to relative
        marginBottom: '20px',
    },
    headerText: {
        fontFamily: 'SFProMed',
        fontSize: 18,
        margin: 0, // Reset default margin
    },
    image: {
        maxWidth: '100%',
        maxHeight: '200px',
        marginBottom: '10px',
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '20px',
    },
    doneButton: {
        backgroundColor: '#4283db',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'SFProMed',
        fontSize: 14,
    },
    x: {
        position: 'absolute', // Position the button absolutely
        top: '10px', // Center it vertically
        right: '2px', // Distance from the right edge
        transform: 'translateY(-50%)', // Adjust vertical alignment
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '26px',
        cursor: 'pointer',
        color: 'grey'
    },
};


export default Modal;

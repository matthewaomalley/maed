import React from 'react';

const Header = () => {
    return (
        <header style={headerStyles}>
            <div style={logoStyles}>
                <img src="../assets/logo.png" alt="Logo here" style={{ height: '100%', width: 'auto' }} />
            </div>
        </header>
    );
};

const headerStyles = {
    backgroundColor: 'white',
    width: '100%',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '0 20px',
};

// make asterik only show for required
// make resume reuiqred so give error message functionality




const logoStyles = {
    height: '40px',
};

export default Header;

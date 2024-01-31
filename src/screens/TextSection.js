import React from 'react';
import { LuDot } from "react-icons/lu";

const TextSection = ({ title, text, isBulletList }) => {
    const styles = {
        bodyText: {
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
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '2px',
            fontFamily: 'SFProReg',
        },
        bulletIcon: {
            color: 'black',
            marginRight: '2px',
            marginTop: '3px',
            fontSize: '20px',
            alignSelf: 'flex-start',
            flexShrink: 0,
        },
        bulletText: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }
    };

    const renderBulletList = () => (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {text.map((item, index) => (
                <li key={index} style={styles.listItem}>
                    <LuDot style={styles.bulletIcon} />
                    <span style={styles.bulletText}>{item}</span>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            {title && <p style={styles.subtitle}>{title}</p>}
            {isBulletList ? renderBulletList() : <p style={styles.bodyText}>{text}</p>}
        </div>
    );
};

export default TextSection;

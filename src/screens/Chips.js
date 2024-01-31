import React from 'react';

const chipStyles = {
    title: {
        fontSize: 16,
        color: '#373530',
        fontFamily: 'SFProMed',
        marginBottom: '5px',
        paddingTop: '10px'
    },
    chipSpan: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#373530',
        backgroundColor: '#d7e5ee',
        borderRadius: 15,
        padding: '4px 10px',
        fontFamily: 'SFProMed',
        margin: '4px',
    },
    iconStyle: {
        marginRight: '5px',
        color: '#373530'
    },
    chipContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    }
};

const IconChip = ({ title, icon, text, backgroundColor, iconColor, textColor }) => {
    return (
        <div>
            {title && <p style={{ ...chipStyles.title }}>{title}</p>}
            <span style={{ ...chipStyles.chipSpan, backgroundColor: backgroundColor || chipStyles.chipSpan.backgroundColor, color: textColor || chipStyles.chipSpan.color }}>
                {icon && React.cloneElement(icon, { style: { ...chipStyles.iconStyle, color: iconColor || chipStyles.iconStyle.color }})}
                {text}
            </span>
        </div>
    );
};

const ChipList = ({ title, items, backgroundColor, color }) => {
    return (
        <div>
            {title && <p style={{ ...chipStyles.title, marginTop: '10px' }}>{title}</p>}
            <div style={chipStyles.chipContainer}>
                {items.map((item, index) => (
                    <IconChip
                        key={index}
                        icon={item.icon}
                        text={item.text}
                        backgroundColor={backgroundColor}
                        color={color}
                    />
                ))}
            </div>
        </div>
    );
};

export { IconChip, ChipList };
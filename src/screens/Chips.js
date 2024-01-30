import React from 'react';

// IconChip Component
const IconChip = ({
    icon,
    text,
    backgroundColor = '#d7e5ee',
    iconColor = '#373530',
    textColor = '#373530'
}) => {
    const styles = {
        chipSpan: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            color: textColor,
            backgroundColor: backgroundColor,
            borderRadius: 15,
            padding: '4px 10px',
            fontFamily: 'SFProMed',
            margin: '4px',

        },
        iconStyle: {
            marginRight: '5px',
            color: iconColor
        }
    };

    return (
        <span style={styles.chipSpan}>
            {icon && React.cloneElement(icon, { style: styles.iconStyle })}
            {text}
        </span>
    );
};

// ChipList Component
const ChipList = ({ items, backgroundColor, color }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
    );
};

export { IconChip, ChipList };
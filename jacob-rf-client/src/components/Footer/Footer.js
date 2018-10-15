import React from 'react';
import './Footer.css';

const footerMenuItems = [
    {
        id: 1,
        defaultMessage: 'JT Education'
    },
    {
        id: 2,
        defaultMessage: 'Tutoring and Education Services'
    },
    {
        id: 3,
        defaultMessage: 'jacobteacher1@gmail.com'
    }
]

const Footer = () => {
    const listFooterMenuItem = footerMenuItems.map((footerMenuItem) => {
        if (footerMenuItem.id === 2){
            return (
                <li key={footerMenuItem.id.toString()} onClick={() => window.scrollTo(0, 0)}>{footerMenuItem.defaultMessage}</li>
            )
        }

        return <li key={footerMenuItem.id.toString()}>{footerMenuItem.defaultMessage}</li>
    });

    return (
        <div className="home-page-footer">
            {listFooterMenuItem}
        </div>
    );
};

export default Footer
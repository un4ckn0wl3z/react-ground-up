import React from 'react';

const Footer = (props) => {
    const {company, email} = props;
    return (
        <div>
            <p>Powered by | Contact email:  {company} {email}</p>
        </div>
    )
}

export default Footer;
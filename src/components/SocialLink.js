import React from 'react';

function SocialLink(props) {
    return (
        <span className='flex w-16 socialLink border-2 border-white rounded-full'>
            <a className='m-auto' href={props.link} target="_blank" rel="noopener noreferrer">
                {props.className && (
                    <img className={props.className} src={props.logo} alt={props.alt} />
                )}
                {!props.className && (
                    <img src={props.logo} alt={props.alt} />
                )}
            </a>
        </span>
    );
}

export default SocialLink;
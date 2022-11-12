import React from 'react';
import './About.css'

const About = (props) => {
    return (
        <div>
            <p><span className="number">{props.value}</span><span className='unit'>{props.unit}</span></p>
            <p>{props.term}</p>
        </div>
    );
};

export default About;
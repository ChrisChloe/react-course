import React from 'react';

const withClass = (props) => (
    <div className={props.style}>
        {props.children}
    </div>
);

export default withClass;
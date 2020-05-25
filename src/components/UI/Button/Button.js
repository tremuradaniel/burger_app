import React from 'react';

import Button from './Button.module.css';

const button = (props) => (
<button
    onClick={props.clicked}
    className={[classes.Button, classes[props.btnType].join(' ')]}
>{props.children}</button>
);

export default button;
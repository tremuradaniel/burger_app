import React from 'react';

import BurgerMenu from '../../../UI/BurgerMenu/BurgerMenu';

const drawerToggle = ( props ) => (
    <BurgerMenu  clicked={props.clicked} />
);

export default drawerToggle;
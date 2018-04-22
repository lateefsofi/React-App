import React from 'react';

import Aux from '../../hoc/AuxContainer';
import classes from './Layout.css'
const layout= (props) =>{
    return(
        <Aux>
            <div>Navbar, Side drawer, Backdrop</div>
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;
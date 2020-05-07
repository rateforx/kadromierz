/*
 * ******************************************************
 *  * Copyright (C) 2020 Filip Janta <filip.janta@gmail.com>
 *  *
 *  * This file is part of Kadromierz project.
 *  *
 *  * Kadromierz project cannot be copied and/or distributed without the express
 *  * permission of Filip Janta
 *  ******************************************************
 */

import React, { useState } from 'react';
import { Navbar }          from 'reactstrap';


export default function Navigation ( props ) {

    const [ sidebarOpened, setSidebarOpened ] = useState(
        document.documentElement.className.indexOf( 'nav-open' ) !== -1,
    );

    const toggleSidebar = () => {
        document.documentElement.classList.toggle( 'nav-open' );
        setSidebarOpened( !sidebarOpened );
    };

    return (
        <Navbar className = 'navbar-absolute bg-transparent flex-row-reverse' expand = "lg">
            <div className = { `navbar-toggle d-inline ${ sidebarOpened && 'toggled' }` }>
                <button
                    className = "navbar-toggler"
                    type = "button"
                    onClick = { toggleSidebar }
                >
                    <span className = "navbar-toggler-bar bar1"/>
                    <span className = "navbar-toggler-bar bar2"/>
                    <span className = "navbar-toggler-bar bar3"/>
                </button>
            </div>
        </Navbar>
    );
}

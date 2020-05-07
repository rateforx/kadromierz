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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React               from 'react';
import { Link }            from 'react-router-dom';
import { Nav }             from 'reactstrap';
import DepartmentsList     from './DepartmentsList';


export default function Sidebar () {
    return (
        <div className = "sidebar bg-black-50">
            <div className = "sidebar-wrapper" style = { {
                display           : 'grid',
                gridTemplateAreas : '"top" "middle" "bottom"',
                placeContent      : 'space-between stretch',
            } }>
                <div style = { {
                    gridArea : 'top',
                } }>
                    <Link to = '/'
                          className = "d-flex justify-content-center align-items-center py-3 mx-3 border-bottom">
                        <FontAwesomeIcon icon = 'users' size = '2x' color = 'white' className = 'mr-3'/>
                        <b><span className = 'text-white smallcaps'>Kadromierz</span></b>
                    </Link>
                    <Link to = '/grouping-tool'
                          className = "d-flex justify-content-center align-items-center py-3 mx-3 border-bottom">
                        <FontAwesomeIcon icon = 'users-cog' size = '2x' color = 'white' className = 'mr-3'/>
                        <span className = 'text-white smallcaps'>Grouping Tool</span>
                    </Link>
                </div>

                <Nav style = { {
                    gridArea  : 'middle',
                    alignSelf : 'start',
                } }>
                    <DepartmentsList/>
                </Nav>

                <div className = 'd-flex justify-content-around align-items-center py-3 mx-3 border-top' style = { {
                    gridArea  : 'bottom',
                    alignSelf : 'end',
                } }>
                    <a href = 'https://elbaldo.dev'>
                        <FontAwesomeIcon icon = 'briefcase' size = '2x' color = 'white'/>
                    </a>
                    <a href = 'https://github.com/rateforx/kadromierz/'>
                        <FontAwesomeIcon icon = { [ 'fab', 'github' ] } size = '2x' color = 'white'/>
                    </a>
                    <a href = 'https://linkedin.com/in/filip-janta/'>
                        <FontAwesomeIcon icon = { [ 'fab', 'linkedin' ] } size = '2x' color = 'white'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

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
import { Card }            from 'reactstrap';


export default function Home ( props ) {
    return (
        <div className = 'd-flex flex-column justify-content-around'>
            <div className = 'd-flex flex-wrap justify-content-around'>
                <Link to = '/employees'>
                    <Card className = 'bg-black-50 d-flex justify-content-center align-items-center my-5' style = { {
                        width  : `300px`,
                        height : `300px`,
                    } }>
                        <FontAwesomeIcon icon = 'users' size = '10x' color = 'white'/>
                        <h1 className = 'position-absolute text-white fixed-bottom text-center smallcaps'>Employees</h1>
                    </Card>
                </Link>
                <Link to = '/grouping-tool'>
                    <Card className = 'bg-black-50 d-flex justify-content-center align-items-center my-5' style = { {
                        width  : `300px`,
                        height : `300px`,
                    } }>
                        <FontAwesomeIcon icon = 'users-cog' size = '10x' color = 'white'/>
                        <h1 className = 'position-absolute text-white fixed-bottom text-center smallcaps'>Grouping
                                                                                                          Tool</h1>
                    </Card>
                </Link>
            </div>
            <div className = 'd-flex flex-wrap justify-content-around'>
                <a href = 'https://elbaldo.dev'>
                    <Card className = 'bg-black-50 d-flex justify-content-center align-items-center my-5' style = { {
                        width  : `300px`,
                        height : `300px`,
                    } }>
                        <FontAwesomeIcon icon = 'briefcase' size = '10x' color = 'white'/>
                        <h1 className = 'position-absolute text-white fixed-bottom text-center smallcaps'>Portfolio</h1>
                    </Card>
                </a>
                <a href = 'https://github.com/rateforx/kadromierz/'>
                    <Card className = 'bg-black-50 d-flex justify-content-center align-items-center my-5' style = { {
                        width  : `300px`,
                        height : `300px`,
                    } }>
                        <FontAwesomeIcon icon = { [ 'fab', 'github' ] } size = '10x' color = 'white'/>
                        <h1 className = 'position-absolute text-white fixed-bottom text-center smallcaps'>Github
                                                                                                          Repository</h1>
                    </Card>
                </a>
                <a href = 'https://linkedin.com/in/filip-janta/'>
                    <Card className = 'bg-black-50 d-flex justify-content-center align-items-center my-5' style = { {
                        width  : `300px`,
                        height : `300px`,
                    } }>
                        <FontAwesomeIcon icon = { [ 'fab', 'linkedin' ] } size = '10x' color = 'white'/>
                        <h1 className = 'position-absolute text-white fixed-bottom text-center smallcaps'>Linked In</h1>
                    </Card>
                </a>
            </div>
        </div>
    );
}

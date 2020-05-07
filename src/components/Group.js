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
import { Col }             from 'reactstrap';
import { EmployeeAvatar }  from './EmployeeAvatar';


const radius = 150;

export default function Group ( props ) {

    const angle                 = 360 / props.group.length;
    const [ active, setActive ] = useState( false );

    return (
        <Col xs = { 'auto' } className = 'p-5 m-5' style = { {
            width  : `${ radius * 2 }px`,
            height : `${ radius * 2 }px`,
        } } onMouseEnter = { () => {
            setActive( true );
        } } onMouseLeave = { () => {
            setActive( false );
        } }
        >
            <div
                className = "group rounded-circle position-absolute d-flex justify-content-center align-items-center bg-black-50"
                style = { {
                    width     : `${ radius * 2 }px`,
                    height    : `${ radius * 2 }px`,
                    transform : `translate(-75px,-75px)`,
                } }
            >
                <h1 className = 'text-white mb-0'>#{ props.number }</h1>
            </div>
            {
                props.group.map( ( employee, i ) =>
                    <div key = { i } className = 'position-absolute' style = { {
                        transformOrigin : 'center',
                        transform       : `
                            translate( -50%, -50% )
                            translate( ${ radius }px, ${ radius }px )
                            rotate( ${ i * angle - ( active ? 30 : 0 ) }deg )
                            translateX( ${ radius * ( active ? 1 : .6 ) }px )
                            rotate( ${ -i * angle + ( active ? 30 : 0 ) }deg )
                            translate(-75px,-75px)
                        `,
                        transition      : `transform 100ms cubic-bezier( 0.68, -0.55, 0.27, 1.55 )`,
                    } }>
                        <EmployeeAvatar employee = { employee }/>
                    </div>,
                )
            }
        </Col>
    );
}

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

import { FontAwesomeIcon }                            from '@fortawesome/react-fontawesome';
import React, { useState }                            from 'react';
import { Badge, Popover, PopoverBody, PopoverHeader } from 'reactstrap';


export function EmployeeAvatar ( props ) {

    const [ popoverOpen, setPopoverOpen ] = useState( false );

    return (
        <>
            <img src = { props.employee.avatar } className = 'employee-avatar rounded-circle'
                 id = { `avatar-${ props.employee.id }` } alt = { props.employee.name }/>
            <Popover placement = 'right' isOpen = { popoverOpen } target = { `avatar-${ props.employee.id }` }
                     toggle = { () => setPopoverOpen( !popoverOpen ) } trigger = 'hover focus'
                     popperClassName = 'bg-black-75' delay = { 100 }
            >
                <PopoverHeader className = 'text-white bg-transparent border-bottom-0'>
                    <b>{ props.employee.name }</b>
                    <Badge color = 'info' className = 'float-right'>{ props.employee.age }</Badge>
                </PopoverHeader>
                <PopoverBody>
                    <p className = 'd-flex flex-row justify-content-between align-items-center'>
                        <FontAwesomeIcon size = '2x' icon = { 'user-tie' } className = 'mr-3'/>
                        <span>{ props.employee.title }</span>
                    </p>
                    <p className = 'd-flex flex-row justify-content-between align-items-center'>
                        <FontAwesomeIcon size = '2x' icon = { 'building' } className = 'mr-3'/>
                        <span>{ props.employee.department }</span>
                    </p>
                    <p className = 'd-flex flex-row justify-content-between align-items-center'>
                        <FontAwesomeIcon size = '2x' icon = { 'map-marker-alt' } className = 'mr-3'/>
                        <span>{ props.employee.city }, { props.employee.province }</span>
                    </p>
                </PopoverBody>
            </Popover>
        </>
    );
}

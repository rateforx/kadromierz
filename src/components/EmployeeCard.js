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
import React                                          from 'react';
import { Badge, Card, CardBody, CardHeader, CardImg } from 'reactstrap';


export function EmployeeCard ( props ) {

    return (
        <Card className = 'employee bg-black-50 mx-1' style = { {
            width : '300px',
        } }>
            <CardImg top width = "100%" src = { props.avatar } alt = { props.name }/>
            <CardHeader>
                <h3 className = 'd-flex flex-row justify-content-between align-items-center'>
                    <span className = ''><b>{ props.name }</b></span>
                    <Badge color = 'info'>{ props.age }</Badge>
                </h3>
            </CardHeader>
            <CardBody className = 'd-flex flex-column justify-content-end'>
                <p className = 'd-flex flex-row justify-content-start align-items-center'>
                    <FontAwesomeIcon size = '2x' className = 'pr-2' icon = { 'user-tie' }/>
                    <span>{ props.title }</span>
                </p>
                <p className = 'd-flex flex-row justify-content-start align-items-center'>
                    <FontAwesomeIcon size = '2x' className = 'pr-2' icon = { 'building' }/>
                    <span>{ props.department }</span>
                </p>
                <p className = 'd-flex flex-row justify-content-start align-items-center'>
                    <FontAwesomeIcon size = '2x' className = 'pr-2' icon = { 'map-marker-alt' }/>
                    <span>{ props.city }, { props.province }</span>
                </p>
            </CardBody>
        </Card>
    );
}

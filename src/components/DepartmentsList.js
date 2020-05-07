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

import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { FontAwesomeIcon }           from '@fortawesome/react-fontawesome';
import React                         from 'react';
import { NavLink }                   from 'react-router-dom';
import { departmentsQuery }          from '../queries';
import ErrorAlert                    from './ErrorAlert';
import Loader                        from './Loader';


export default function DepartmentsList ( props ) {

    const { loading, error, data } = useQuery( departmentsQuery, { client : useApolloClient() } );
    if ( loading ) return <Loader loading = { loading }/>;
    if ( error ) return <ErrorAlert error = { error }/>;

    const NavItem = props =>
        <li className = { props.active }>
            <NavLink to = { props.link } activeClassName = "active"
                     className = "nav-link d-flex flex-nowrap justify-content-between align-items-center"
            >
                <h4 className='mb-0'>{ props.name }</h4>
                <FontAwesomeIcon icon = { props.icon } size = '2x'/>
            </NavLink>
        </li>;

    return (
        <>
            <NavItem link = '/employees' name = 'All' icon = 'infinity'/>
            { data.departments.map( ( { name }, i ) =>
                <NavItem key = { i } link = { `/employees/${ name }` } name = { name }
                         icon = { icons[ name ] }/>,
            ) }
        </>
    );
}

const icons = {
    Accountability : 'money-bill-wave',
    Integration    : 'link',
    Optimization   : 'tachometer-alt',
    Security       : 'lock',
    Mobility       : 'car',
    Metrics        : 'sort-numeric-up',
    Accounts       : 'user-circle',
    Usability      : 'user-cog',
    Assurance      : 'user-shield',
    Infrastructure : 'industry',
    Operations     : 'space-shuttle',
    Factors        : 'cogs',
    Marketing      : 'search-dollar',
    Response       : 'reply',
    Branding       : 'copyright',
    Implementation : 'angle-double-down',
    Tactics        : 'marker',
    Solutions      : 'question-circle',
    Applications   : 'vote-yea',
    Brand          : 'tag',
    Functionality  : 'wave-square',
    Group          : 'users',
    Interactions   : 'people-arrows',
    Division       : 'divide',
    Quality        : 'award',
    Data           : 'database',
    Research       : 'search',
    Program        : 'code',
    Paradigm       : 'cubes',
    Communications : 'comments',
    Creative       : 'lightbulb',
    Directives     : 'map-signs',
    Markets        : 'shopping-basket',
    Intranet       : 'network-wired',
    Web            : 'globe-europe',
    Identity       : 'fingerprint',
    Configuration  : 'check',
};

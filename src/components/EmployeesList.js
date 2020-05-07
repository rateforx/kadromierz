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
import React                         from 'react';
import { useParams }                 from 'react-router-dom';
import { Alert }                     from 'reactstrap';
import { employeesQuery }            from '../queries';
import { EmployeeCard }              from './EmployeeCard';
import ErrorAlert                    from './ErrorAlert';
import Loader                        from './Loader';


export default function EmployeesList ( props ) {

    const { department } = useParams();

    const { loading, error, data } = useQuery( employeesQuery, {
        client    : useApolloClient(),
        variables : !!department ? { department : department } : {},
    } );
    if ( loading ) return <Loader loading = { loading }/>;
    if ( error ) return <ErrorAlert error = { error }/>;

    return (
        <>
            <Alert className = 'bg-black-75' fade = { false }>
                <h1 className = 'mb-0'>{ department || 'All Employees' }</h1>
            </Alert>
            <div className = 'd-flex flex-wrap align-items-stretch justify-content-between'>
                {
                    data.employees.map( employee =>
                        <EmployeeCard key = { employee.id } { ...employee } />,
                    )
                }
            </div>
        </>
    );
}

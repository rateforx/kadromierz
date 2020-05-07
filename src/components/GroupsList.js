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
import { employeesGroupedQuery }     from '../queries';
import Group                         from './Group';
import Loader                        from './Loader';
import ErrorAlert                    from './ErrorAlert';


export default function GroupsList ( props ) {

    const { data, loading, error } = useQuery( employeesGroupedQuery, {
        client    : useApolloClient(),
        variables : {
            groupSize : props.groupSize,
            columns   : props.columns,
        },
    } );

    if ( loading ) return <Loader loading = { loading }/>;
    if ( error ) return <ErrorAlert error = { error }/>;

    return (
        <div className = "d-flex flex-wrap justify-content-around align-items-center mt-5">
            {
                data.employeesGrouped.map( ( group, index ) =>
                    <Group group = { group } number = { index + 1 } key = { index }/>,
                )
            }
        </div>
    );
}

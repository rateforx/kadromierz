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

import { gql } from 'apollo-boost';


export const employeesQuery = gql`
    query employees($department: String) {
        employees(department: $department) {
            id
            name
            city
            province
            age
            title
            department
            avatar
        }
    }
`;

export const departmentsQuery = gql`
    {
        departments {
            name: department
        }
    }
`;

export const employeesGroupedQuery = gql`
    query employeesGrouped(
        $groupSize: Int!
        $columns: [String]!
    ) {
        employeesGrouped(
            groupSize: $groupSize
            columns: $columns
        ) {
            id
            name
            city
            province
            age
            title
            department
            avatar
        }
    }
`;

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

const fs              = require( 'fs' );
const { buildSchema } = require( `graphql` );
const express         = require( `express` );
const graphQL         = require( `express-graphql` );
const cors            = require( 'cors' );
const knex            = require( './db' );
const GroupingTools   = require( './GroupingTool' );

const schema = buildSchema( fs.readFileSync( 'src/schema.graphql', 'utf8' ) );

const root = {
    employee         : async args => {
        const query = knex( 'employees' ).where( args );
        return ( await query )[ 0 ];
    },
    employees        : async args => {
        return knex( 'employees' ).where( args );
    },
    employeesGrouped : async ( { groupSize, columns } ) => {
        const select = [ 'id', 'name', 'city', 'province', 'age', 'title', 'department', 'avatar' ];
        return await GroupingTools.groupRecordsByColumns( 'employees', select, groupSize, columns );
    },
    departments      : async () => {
        return knex( 'employees' )
            .distinct( 'department' )
            .orderBy( 'department' );
    },
};

const app = express();

app.use( cors() );

app.use( '/graphql', graphQL( {
    schema    : schema,
    rootValue : root,
    graphiql  : true,
} ) );

app.listen( 4000, () => {
    console.log( `Running a GraphQL API server at http://localhost:4000/graphql` );
} );

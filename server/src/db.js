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

const Knex = require( 'knex' );

const knex = Knex( {
    client           : 'sqlite3',
    connection       : {
        filename : './src/db.sqlite',
    },
    useNullAsDefault : true,
} );

module.exports = knex;

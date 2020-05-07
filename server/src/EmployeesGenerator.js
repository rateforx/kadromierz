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

const faker = require( 'faker' );
const knex  = require( './db' );

const cities = [
    'Warszawa',
    'Kraków',
    'Łódź',
    'Wrocław',
    'Poznań',
    'Gdańsk',
    'Szczecin',
    'Bydgoszcz',
    'Lublin',
    'Białystok',
    'Katowice',
    'Gdynia',
    'Częstochowa',
    'Radom',
    'Toruń',
    'Sosnowiec',
    'Kielce',
    'Rzeszów',
    'Gliwice',
    'Zabrze',
    'Olsztyn',
    'Bielsko-Biała',
    'Bytom',
    'Zielona Góra',
];

faker.locale = 'pl';

function generateEmployeeData () {
    return {
        name       : faker.name.findName(),
        city       : cities[ Math.floor( Math.random() * cities.length ) ],
        province   : faker.address.state(),
        age        : Math.floor( Math.random() * 47 ) + 18,
        title      : faker.name.jobTitle(),
        department : faker.name.jobArea(),
        avatar     : faker.image.avatar(),
    };
}

function generateEmployees ( count ) {
    const result = [];
    for ( let i = 0; i < count; i++ ) {
        result.push( generateEmployeeData( i ) );
    }
    return result;
}

async function insertEmployees ( employees ) {
    await knex.transaction( transaction => {
        transaction
            .insert( employees )
            .into( 'employees' );
    } );
}

const employees = generateEmployees( 500 );

try {
    insertEmployees( employees ).then();
} catch ( err ) {
    console.error( err );
}



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

const knex = require( './db' );
const uuid = require( 'uuid' ).v1;

class Group {
    constructor ( props, size ) {
        this.props    = props;
        this.size     = size;
        this._records = [];

        this.usedPropsKeys = {};
        for ( let prop of props ) {
            this.usedPropsKeys[ prop ] = [];
        }
    }

    get records () {
        return this._records;
    }

    get count () {
        return this._records.length;
    }

    add ( object ) {
        for ( let prop of this.props ) {
            this.usedPropsKeys[ prop ].push( object[ prop ] );
        }
        this._records.push( object );
    }
}

module.exports = {
    /**
     *
     * @param table {String}
     * @param select {[{String}]}
     * @param groupSize {Number}
     * @param columns {[{String}]}
     * @return {Promise<[{Group}]>}
     */
    groupRecordsByColumns : async ( table, select, groupSize, columns ) => {
        const groups = [];

        const hasGroup = uuid(); // random name for the temp column
        await knex.schema.table( table, table => {
            table
                .boolean( hasGroup )
                .defaultTo( false )
                .index( hasGroup + '_index' );
        } );

        const query = knex( table )
            .count( 'id', { as : 'count' } );

        const recordsCount  = ( await query )[ 0 ].count;
        let groupedRecords = 0;

        while ( groupedRecords < recordsCount ) {

            const group = new Group( columns, groupSize );

            for ( let i = 0; i < groupSize; i++ ) {
                let record;

                const query = knex
                    .select( select )
                    .from( table )
                    .where( hasGroup, false )
                    .orderByRaw( 'RANDOM()' )
                    .limit( 1 );

                if ( i ) for ( const prop in group.usedPropsKeys ) {
                    query.whereNotIn( prop, group.usedPropsKeys[ prop ] );
                }
                record = ( await query )[ 0 ];

                if ( !!record ) {
                    await knex( table )
                        .update( hasGroup, true )
                        .where( 'id', record.id );

                    group.add( record );
                    groupedRecords++;
                } else {
                    break;
                }
            }
            groups.push( group );
        }

        await knex.schema.table( table, table => {
            table.dropColumn( hasGroup );
        } );

        for ( let i = 0; i < groups.length; i++ ) {
            groups[ i ] = groups[ i ].records;
        }

        return groups;
    },
};

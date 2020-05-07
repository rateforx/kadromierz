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

import { ApolloProvider }          from '@apollo/react-common';
import ApolloClient                from 'apollo-boost';
import { createBrowserHistory }    from 'history';
import React                       from 'react';
import ReactDOM                    from 'react-dom';
import { Router } from 'react-router-dom';
import './styles/black-dashboard-react.css';
import './styles/index.css';
import App                         from './components/App';


const client = new ApolloClient( {
    uri : `${ window.location.origin }:4000/graphql`,
} );

ReactDOM.render(
    <ApolloProvider client = { client }>
        <Router history = { createBrowserHistory() }>
            <App/>
        </Router>
    </ApolloProvider>,
    document.getElementById( 'root' ),
);

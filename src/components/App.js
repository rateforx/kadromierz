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

import { library }         from '@fortawesome/fontawesome-svg-core';
import { fab }             from '@fortawesome/free-brands-svg-icons';
import { fas }             from '@fortawesome/free-solid-svg-icons';
import React               from 'react';
import { Route, Switch }   from 'react-router-dom';
import '../styles/App.css';
import EmployeesList       from './EmployeesList';
import Footer              from './Footer.js';
import GroupingTool        from './GroupingTool';
import Home                from './Home';
import Navigation          from './Navigation';
import ParticlesBackground from './Particles';
import Sidebar             from './Sidebar.js';


export default function App ( props ) {

    library.add( fas, fab );

    return (
        <div className = "wrapper app">
            <ParticlesBackground/>
            <Navigation sidebarOpened = { false }/>
            <Sidebar/>
            <main className = "main-panel border-top-0" style = { {
                background : 'none',
            } }>
                <div className = 'content pt-5'>
                    <Switch>
                        <Route exact path = "/">
                            <Home/>
                        </Route>
                        <Route exact path = "/grouping-tool">
                            <GroupingTool/>
                        </Route>
                        <Route exact path = "/employees">
                            <EmployeesList/>
                        </Route>
                        <Route path = "/employees/:department">
                            <EmployeesList/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </main>
        </div>
    );
}

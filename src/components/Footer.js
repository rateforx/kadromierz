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

import React         from 'react';
import { Container } from 'reactstrap';


export default function Footer () {
    return (
        <footer className = "footer">
            <Container fluid>
                <div className = 'float-right mr-5 '>
                    <small>{ new Date().getFullYear() }</small>  &copy;  <small>All Rights Reserved</small> <a href = "https://elbaldo.dev/">Filip Janta</a>
                </div>
            </Container>
        </footer>
    );
}

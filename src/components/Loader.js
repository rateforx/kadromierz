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

import React          from 'react';
import { GridLoader } from 'react-spinners';


export default function Loader ( props ) {
    return (
        <div className = 'd-flex justify-content-center vh-100 align-items-center' style = { {
            filter    : `blur(5px)`,
            minHeight : `100%`,
        } }>
            <GridLoader size = { 25 } margin = { 5 } color = 'white'/>
        </div>
    );
}

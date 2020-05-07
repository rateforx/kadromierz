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

import React     from 'react';
import { Alert } from 'reactstrap';


export default function ErrorAlert ( props ) {
    return (
        <Alert color = 'danger'>
            <h2 className = 'alert-heading'>Oh snap! You got an error!</h2>
            <hr/>
            <p>
                { props.error.message || `There was an error when loading data...` }
            </p>
        </Alert>
    );
}

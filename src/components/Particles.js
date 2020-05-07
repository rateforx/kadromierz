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

import React, { useEffect, useState } from 'react';
import Particles                      from 'react-particles-js';


export default function ParticlesBackground () {

    const [ width, setWidth ]   = useState( window.innerWidth );
    const [ height, setHeight ] = useState( window.innerHeight );

    useEffect( () => {
        window.addEventListener( 'resize', () => {
            setWidth( window.innerWidth );
            setHeight( window.innerHeight );
        } );
    } );

    return (
        <div className = 'position-fixed min-vh-100' style = { {
            pointerEvents : 'none',
            filter        : `blur(1px)`,
        } }>
            <Particles
                width = { width } height = { height } params = { {
                'particles'     : {
                    'number'      : {
                        'value'   : 250,
                        'density' : {
                            'enable' : true,
                        },
                    },
                    'size'        : {
                        'value'  : 3,
                        'random' : true,
                        'anim'   : {
                            'speed'    : 4,
                            'size_min' : 0.3,
                        },
                    },
                    'line_linked' : {
                        'enable' : false,
                    },
                    'move'        : {
                        'random'    : true,
                        'speed'     : 1,
                        'direction' : 'top',
                        'out_mode'  : 'out',
                    },
                },
                'interactivity' : {
                    'events' : {
                        'onhover'  : {
                            'enable' : true,
                            'mode'   : 'bubble',
                        },
                        'onclick'  : {
                            'enable' : true,
                            'mode'   : 'repulse',
                        },
                        'onresize' : {
                            'enable'       : true,
                            'density_auto' : true,
                            'density_area' : 1200,
                        },
                    },
                    'modes'  : {
                        'bubble'  : {
                            'distance' : 250,
                            'duration' : 2,
                            'size'     : 0,
                            'opacity'  : 0,
                        },
                        'repulse' : {
                            'distance' : 400,
                            'duration' : 4,
                        },
                    },
                },
            } }/>
        </div>
    );
}

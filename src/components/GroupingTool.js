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

import React, { useState }                                                                          from 'react';
import Switch                                                                                       from 'react-switch';
import { Alert, Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import GroupsList                                                                                   from './GroupsList';


export default function GroupingTool ( props ) {

    const [ age, setAge ]               = useState( true );
    const [ title, setTitle ]           = useState( false );
    const [ department, setDepartment ] = useState( true );
    const [ city, setCity ]             = useState( false );
    const [ province, setProvince ]     = useState( true );
    const [ groupSize, setGroupSize ]   = useState( 5 );
    const [ submitted, setSubmitted ]   = useState( false );

    function getColumnsList () {
        const columns = [];
        age && columns.push( 'age' );
        title && columns.push( 'title' );
        department && columns.push( 'department' );
        city && columns.push( 'city' );
        province && columns.push( 'province' );
        return columns;
    }

    const SwitchGroup = props =>
        <label className = 'd-flex align-items-center mb-3'>
            <Switch checked = { props.state } onChange = { checked => {
                props.setter( checked );
            } }/>
            <span className = 'ml-2'>{ props.label }</span>
        </label>;

    const RadioGroup = props =>
        <FormGroup check className = "form-check-radio form-check-inline">
            <Label className = "form-check-label">
                <Input type = "radio" name = { props.name } value = { props.value }
                       checked = { groupSize === props.value } onChange = { () => {
                    setGroupSize( props.value );
                } }/>
                { props.label }
                <span className = "form-check-sign"/>
            </Label>
        </FormGroup>;

    return (
        <>
            <Alert className = 'bg-black-75' fade = { false }>
                <h1 className = 'mb-0'>Grouping Tool</h1>
            </Alert>

            <Card className = 'bg-black-50'>
                <CardHeader className = 'bg-black-50'>
                    <CardTitle><h2 className = 'mb-0'>Grouping parameteres</h2></CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                        <div className = 'd-flex flex-column flex-md-row'>
                            <Col md = { 4 } className = 'mb-3'>
                                <h3>Group by columns:</h3>
                                <div className = 'd-flex flex-column'>
                                    <SwitchGroup state = { age } setter = { setAge } label = 'Age'/>
                                    <SwitchGroup state = { title } setter = { setTitle } label = 'Title'/>
                                    <SwitchGroup state = { department } setter = { setDepartment }
                                                 label = 'Department'/>
                                    <SwitchGroup state = { city } setter = { setCity } label = 'City'/>
                                    <SwitchGroup state = { province } setter = { setProvince } label = 'Province'/>
                                </div>
                            </Col>

                            <Col md = { 4 } className = 'mb-3'>
                                <h3>Group size:</h3>
                                <div className = 'd-flex flex-column'>
                                    <RadioGroup name = 'groupSize' value = { 2 } label = { 2 }/>
                                    <RadioGroup name = 'groupSize' value = { 3 } label = { 3 }/>
                                    <RadioGroup name = 'groupSize' value = { 4 } label = { 4 }/>
                                    <RadioGroup name = 'groupSize' value = { 5 } label = { 5 }/>
                                    <RadioGroup name = 'groupSize' value = { 6 } label = { 6 }/>
                                    <RadioGroup name = 'groupSize' value = { 7 } label = { 7 }/>
                                    <RadioGroup name = 'groupSize' value = { 8 } label = { 8 }/>
                                </div>
                            </Col>

                            <Col md = { 4 }
                                 className = 'mb-3 d-flex flex-column justify-content-center align-items-center'>
                                <Button size = 'lg' onClick = { () => {
                                    setSubmitted( true );
                                } }>Create groups</Button>
                            </Col>
                        </div>
                    </Form>
                </CardBody>
            </Card>

            { submitted && <GroupsList columns = { getColumnsList() } groupSize = { groupSize }/> }
        </>
    );
}

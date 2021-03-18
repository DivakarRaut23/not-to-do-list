import React from 'react'
import {Alert} from 'react-bootstrap';

export  const TotalHr = ({hourSaved}) => {
    return (
            <>
            <Alert show={hourSaved>0}variant="success">Total Hours Saved : {hourSaved}</Alert>
            </>
           )
}

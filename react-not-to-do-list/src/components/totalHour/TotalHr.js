import React from 'react'
import {Alert} from 'react-bootstrap';

export  const TotalHr = ({totalHour}) => {
    return (
            <>
            <Alert show={totalHour>0}variant="success">Total Allocated Hours: {totalHour}/ Hours Remaining : {168 - totalHour}</Alert>
            </>
           )
}

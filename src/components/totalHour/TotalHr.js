import React from 'react'
import {Navbar} from 'react-bootstrap';

export  const TotalHr = ({hourSaved}) => {
    return (
            <>
                <Navbar bg="light">
                    <Navbar.Brand color="white">Total Hours Saved : {hourSaved}</Navbar.Brand>
                </Navbar>
            </>
        
            )
}

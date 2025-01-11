import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Headers from '../component/Headers'


function Dashboard() {
    return (
        <>
            <Headers />
            <div className='p-4'>
                <div className='mt-5'>
                    <div>
                        <Row>
                            <Col lg={3} md={12}>
                              
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
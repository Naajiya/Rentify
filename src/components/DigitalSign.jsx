import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'



function DigitalSign({setDigitalSign}) {
    const sigPad = useRef(null);
    const [currentSign, setCurrentSign] = useState('')

    const saveSignature = () => {

        if (sigPad.current.isEmpty()) {
            alert('please draw and save')
        } else {

            // remove all whitespace trim()
            const savedSign = sigPad.current?.getTrimmedCanvas();
            // get signature image
            const dataUrl = savedSign.toDataURL('image/png')
            console.log(dataUrl)
            setCurrentSign(dataUrl)

            if(dataUrl){
                setDigitalSign(dataUrl)
            }

        }


    }

    const clearSign=()=>{
        sigPad.current.clear()
        setCurrentSign('')
        setDigitalSign('')
    }


    useEffect(() => {

    }, currentSign?.currentSign)
    return (
        <>
            <div className='ps-2 '>
                <div className='mt-3 '>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col>
                            <div>
                                <SignatureCanvas
                                    ref={sigPad}
                                    penColor='black'
                                
                                   
                                    canvasProps={{ width: 300, height: 300, className: 'sigCanvas border shadow rounded-3 border-1',willReadFrequently: true  }} />
                                <div className=''>
    
                                    <Button variant='dark' size='sm' className='m-2 bold' style={{fontSize:'14px'}} onClick={saveSignature}>Save</Button>
                                    <Button variant='dark' size='sm' className='bold m-2' style={{fontSize:'14px'}} onClick={clearSign}>Clear</Button>
                                </div>
                            </div>
    
                        </Col>
                        <Col>
                        {currentSign && (
                            <div className='text-center '>
                                <h2>Your Sign</h2>
                                <img
                                    src={currentSign}
                                    alt="Saved Signature"
                                    className="img-fluid border border-2"
                                    style={{ maxWidth: '200px' }}
                                />
                            </div>
                        )}
                        </Col>
                    </Row>
                    
                </div>

            </div>
        </>
    )
}

export default DigitalSign
import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'
Button


function DigitalSign() {
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

        }


    }

    const clearSign=()=>{
        sigPad.current.clear()
        setCurrentSign('')
    }


    useEffect(() => {

    }, currentSign?.currentSign)
    return (
        <>
            <div className='p-5  '>
                <div className='pt-5 '>
                    <Row className='d-flex justify-content-center align-items-center text-center'>
                        <Col>
                            <div>
                                <SignatureCanvas
                                    ref={sigPad}
                                    penColor='black'
                                    
                                    canvasProps={{ width: 300, height: 300, className: 'sigCanvas border border-3'  }} />
                                <div>
    
                                    <Button onClick={saveSignature}>Save</Button>
                                    <Button onClick={clearSign}>Clear</Button>
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
                    <Row>
                       
                    </Row>
                </div>

            </div>
        </>
    )
}

export default DigitalSign
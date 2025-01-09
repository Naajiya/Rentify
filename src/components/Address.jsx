
import Input from '@mui/joy/Input';
import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Stack from '@mui/joy/Stack';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';
import DigitalSign from './DigitalSign'


// import { Button as BootstrapButton } from 'react-bootstrap';

function Address() {
  // const inputRef = React.useRef(null);
  const [dates, setDates] = useState({ day: null, month: null, year: null })


  const [otp, setOtp] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  console.log("dates", dates)

  useEffect(() => {
    today()
  }, [])

  const today = () => {
    const date = new Date()
    console.log(date)
    const m = date.getMonth()
    const d = date.getDate()
    const y = date.getFullYear()
    console.log(d)

    setDates({ day: d, month: m, year: y })
  }



  return (
    <>
      <div className=''>
        <div className='p-5'>
          <div className='pt-5 '>

            <Row className='d-flex justify-content-between align-items-between'>
              <Col lg={7}>
                <div className='border p-2 rounded shadow'>

                  {/* phone number verification */}
                  <div className='d-flex border p-2 border-dark rounded' >
                    <Input
                      disabled={false}
                      placeholder="mobile number"
                      variant="outlined"
                      className='w-50 m-2 mt-3'
                    />
                    {/* get otp */}
                    <Button onClick={handleShow} variant="plain" className='h-25 mt-3' size='sm'>Get OTP</Button>
                  </div>

                  <div className='d-flex m-2'>
                    <Input
                      placeholder="Name"
                      size="sm"
                      variant="soft"
                      className='w-50 m-1'
                    />

                    <Input
                      placeholder="Phone"
                      size="sm"
                      variant="soft"
                      className='w-50 m-1'
                    />
                  </div>

                  <div className='d-flex m-2'>
                    <Input
                      placeholder="Pincode"
                      size="sm"
                      variant="soft"
                      className='w-50 m-1'
                    />

                    <Input
                      placeholder="Locality"
                      size="sm"
                      variant="soft"
                      className='w-50 m-1'
                    />
                  </div>


                  <Row className='d-flex '>
                    <Box sx={{ p: 1 }} fontSize={1}>
                      <Textarea
                        placeholder="Address (area and streat)"
                        minRows={2}
                        maxRows={4}
                        // minCols={30}
                        variant="soft"
                        className="custom-textarea ms-3 me-3"
                        sx={{ fontSize: '14px' }}
                      // sx={{ width: '300px' }}
                      />
                    </Box>
                  </Row>

                  <div className='d-flex ms-2'>


                    <Stack spacing={1.5} sx={{ minWidth: 259 }}>
                      <Input
                        type="date"
                        className='ms-1 m-2 w-100 text-secondary'
                        variant='soft'
                        slotProps={{
                          input: {
                            min: `${dates.year}-${String(dates.month + 1).padStart(2, '0')}-${String(dates.day).padStart(2, '0')}`, // Set desired minimum date 
                          },
                        }}
                      />
                    </Stack>


                    <Input
                      placeholder="no.of.days"
                      size="sm"
                      type='number'
                      variant="soft"
                      className='w-75 m-2'
                    />


                  </div>
                  <p className='ms-3 text-info' style={{ fontSize: '12px', }}>select date when you want to deliver (order before 5 days)</p>

                  <div className='d-flex m-2'>

                    <Input
                      placeholder="City / Ditstrict / Town"
                      size="sm"
                      variant="soft"
                      className='w-50  m-1'
                    />



                    <Stack spacing={2} sx={{ alignItems: 'flex-start', width: '250' }} >
                      <Select
                        placeholder="State"
                        name="foo"
                        required
                        variant='soft'
                        size='sm'
                        className='m-1 w-100'
                      // sx={{ minWidth: 250 }}
                      >
                        <Option value="Kerala">kerala</Option>
                        <Option value="karnataka">karnataka</Option>
                        <Option value="TamilNadu">TamilNadu</Option>
                        <Option value="Goa">Goa</Option>
                      </Select>

                    </Stack>



                  </div>

                  <div className='d-flex justify-content-end'>

                    <Button variant="outline-danger m-2 bg-dark text-light" size='sm'>Save And Continue</Button>

                  </div>

                </div>

              </Col>


              <Col lg={5} className='text-center d-flex flex-column justify-content-center align-items-center'>
              <DigitalSign/>
              </Col>

            
            </Row>

           


          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>

          </Modal.Header>
          <Modal.Body>
            <div className='text-center d-flex justify-content-center align-items-center w-100 h-100 '>
              <OtpInput
                value={otp}
                onChange={setOtp}
                inputType='number'
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props}
                  style={{ width: '4rem', height: '4rem' }}
                  className='text-center'

                />}
              />
            </div>
            <div className='text-center'>
              <Button variant='dark' className='m-3'>Verify</Button>
            </div>
          </Modal.Body>

        </Modal>

      </div>
    </>
  )
}

export default Address

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



function Address() {
  // const inputRef = React.useRef(null);
  return (
    <>
      <div className=''>
        <div className='p-5'>
          <div className='pt-5 '>

            <Row>
              <Col lg={7}>
                <div className='border p-2'>

                  {/* phone number verification */}
                  <div className='d-flex border p-2' >
                    <Input
                      disabled={false}
                      placeholder="mobile number"
                      variant="outlined"
                      className='w-50 m-2 mt-3'
                    />
                    {/* get otp */}
                    <Button variant="plain" className='h-25 mt-3' size='sm'>Get OTP</Button>
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
                        <Option value="dog">kerala</Option>
                        <Option value="cat">karnataka</Option>
                        <Option value="fish">tamilNadu</Option>
                        <Option value="bird">Goa</Option>
                      </Select>

                    </Stack>



                  </div>

                  <div className='d-flex ms-2'>

                    
                        <Stack spacing={1.5} sx={{ minWidth: 259 }}>
                          <Input
                            type="date"
                            className='ms-1 m-2 w-100 text-secondary'
                            variant='soft'
                            slotProps={{
                              input: {
                                min: '2025-10-10', // Set your desired minimum date here
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

                </div>
              </Col>
            </Row>

          </div>
        </div>

      </div>
    </>
  )
}

export default Address
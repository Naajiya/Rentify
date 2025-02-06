
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
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';
import DigitalSign from '../components/DigitalSign'
import Aadhar from '../components/Aadhar';
import axios from 'axios';
import SelectPymt from '../components/SelectPymt';
import Toast from 'react-bootstrap/Toast';


// import { Button as BootstrapButton } from 'react-bootstrap';

function Address() {

  const navigate = useNavigate()
  // const inputRef = React.useRef(null);
  const [dates, setDates] = useState({ day: null, month: null, year: null })

  const [addresDetails, setAddresDetails] = useState({ name: "", phone: "", pincode: "", addresses: "", date: "", city: "", acceptPolicy: false })
  console.log(addresDetails)

  const [digSign, setDigitalSign] = useState('')
  console.log('dig', digSign)
  const [aadharNumber, setAadharNum] = useState('')
  console.log('adar', aadharNumber)


  const [otp, setOtp] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  console.log("dates", dates)

  useEffect(() => {
    today()
  }, [])

  const today = () => {

    const date = new Date();
    console.log(date);
    const m = date.getMonth();
    let d = date.getDate();
    const y = date.getFullYear();
    console.log(d);

    const newDate = new Date(date.setDate(d + 5));
    const newDay = newDate.getDate();
    const newMonth = newDate.getMonth();
    const newYear = newDate.getFullYear();

    setDates({ day: newDay, month: newMonth, year: newYear });
  }


  const handleCheck = (e) => {
    const { checked } = e.target;
    console.log(checked)
    if (checked) {
      setAddresDetails({ ...addresDetails, acceptPolicy: true })
    } else {
      setAddresDetails({ ...addresDetails, acceptPolicy: false })
    }
  }



  const handleAddressDetails = async () => {
    const { name, phone, pincode, addresses, date, city, acceptPolicy } = addresDetails;

    if (digSign && aadharNumber && name && phone && pincode && addresses && date && city) {
      console.log(aadharNumber, name, phone, pincode, addresses, date, city, acceptPolicy)
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("phone", phone);
      reqBody.append("pincode", pincode);
      reqBody.append("addresses", addresses);
      reqBody.append("date", date);
      reqBody.append("city", city);
      reqBody.append("acceptPolicy", acceptPolicy.toString());
      reqBody.append("aadharNumber", aadharNumber);

      // Convert data URL to a File object
      const blob = await fetch(digSign).then(res => res.blob());
      const file = new File([blob], "signature.png", { type: "image/png" });
      reqBody.append("digSign", file);

      try {
        const result = await axios.post('http://localhost:3000/add-address', reqBody, {
          headers: {
            Authorization: sessionStorage.getItem('token'),
            'Content-Type': 'multipart/form-data'
          }
        });

        if (result.status === 200) {
          <Toast>
            
            <Toast.Body>address added</Toast.Body>
          </Toast>
          // navigate('/bookedItems')
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className=''>
        <div className='p-5'>
          <div className='text-center'>
            Address Details
          </div>
          <div className='pt-5 '>



            <Row className='d-flex border justify-content-between align-items-between p-3'>
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
                      onChange={(e) => { setAddresDetails({ ...addresDetails, name: e.target.value }) }}
                    />

                    <Input
                      placeholder="Phone"
                      size="sm"
                      variant="soft"
                      className='w-50 m-1'
                      type='number'
                      maxLength={10}
                      onChange={(e) => { setAddresDetails({ ...addresDetails, phone: e.target.value }) }}
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
                        onChange={(e) => { setAddresDetails({ ...addresDetails, addresses: e.target.value }) }}
                      // sx={{ width: '300px' }}
                      />
                    </Box>
                  </Row>

                  <div className='d-flex ms-2'>


                    <Stack spacing={1.5} sx={{ minWidth: 259 }}>
                      <Input
                        type="date"
                        className='ms-1 m-2 w-100 text-secondary'
                        onChange={(e) => { setAddresDetails({ ...addresDetails, date: e.target.value }) }}
                        variant='soft'
                        slotProps={{
                          input: {
                            min: `${dates.year}-${String(dates.month + 1).padStart(2, '0')}-${String(dates.day).padStart(2, '0')}`, // Set desired minimum date 
                          },
                        }}
                      />
                    </Stack>


                    <Input
                      placeholder="Pincode"
                      size="sm"
                      variant="soft"
                      className='w-50 m-2'
                      onChange={(e) => { setAddresDetails({ ...addresDetails, pincode: e.target.value }) }}
                    />


                  </div>
                  <p className='ms-3 text-info' style={{ fontSize: '12px', }}>select date when you want to deliver (order before 5 days)</p>

                  <div className='d-flex m-2'>

                    {/* <Stack className="ms-2 w-50" spacing={2} sx={{ alignItems: 'flex-start' }} > */}
                    {/* <Select
                        placeholder="Taluk"
                        name="foo"
                        required
                        variant='soft'
                        size='sm'
                        className='m-1 w-100'
                        onChange={(e)=>{setAddresDetails({...addresDetails,pincode:e.target.value})}}

                      // sx={{ minWidth: 250 }}
                      >
                        <Option value="KOZHIKODE">KOZHIKODE </Option>
                        <Option value="KOYILANDY">KOYILANDY</Option>
                        <Option value="VADAKARA">VADAKARA</Option>
                        <Option value="THAMARASSERY">THAMARASSERY</Option>
                        <Option value="Goa">Goa</Option>
                      </Select>

                    </Stack> */}

                    <Input
                      placeholder="City / Town"
                      size="sm"
                      variant="soft"
                      className='w-50  ms-2'
                      onChange={(e) => { setAddresDetails({ ...addresDetails, city: e.target.value }) }}

                    />







                  </div>

                  <div className='ms-3 mt-3'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={(e) => handleCheck(e)} />
                      <label class="form-check-label" for="flexCheckDefault" className='text-secondary' style={{ fontSize: '12px' }}>
                        I agree to the Terms and Conditions, and my Aadhaar number and Digital signature serve as legal consent
                      </label>
                    </div>
                  </div>

                  <div className='d-flex justify-content-end flex-column'>

                    {/* <Link to={'/bookedItems'}> */}
                    <Button onClick={handleAddressDetails} variant="outline-danger m-2 bg-dark text-light" size='sm'>Save</Button>
                    <p className='text-center' style={{ fontSize: '12px' }}>*only cash on delivery</p>
                    {/* </Link> */}

                  </div>


                </div>

              </Col>


              <Col lg={5} className='text-center d-flex flex-column justify-content-center align-items-center '>

                <div className='border w-100 mt-2'><Aadhar setAadharNum={setAadharNum} /></div>
                <div className='text-center d-flex flex-column border w-100 justify-content-center align-items-center mt-2 '>
                  <div>
                    Draw your sign
                  </div>
                  <DigitalSign setDigitalSign={setDigitalSign} />

                </div>

              </Col>


            </Row>


            <div>
              <SelectPymt />
            </div>



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
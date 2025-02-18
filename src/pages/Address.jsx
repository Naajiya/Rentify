import Input from '@mui/joy/Input';
import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Textarea from '@mui/joy/Textarea';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';
import DigitalSign from '../components/DigitalSign';
import Aadhar from '../components/Aadhar';
import axios from 'axios';
import SelectPymt from '../components/SelectPymt';
import SelectAddress from '../components/SelectAddress';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../components/Header';




function Address() {
  const location = useLocation();
  const { cartDetails } = location.state || {};
  console.log('Cart Details:', cartDetails);

  const [totalAmount, setTotalAmount] = useState(0);
  console.log('total amount', totalAmount);

  useEffect(() => {
    const totalAmount = cartDetails.reduce((accumulator, item) => {
      return accumulator + item.total;
    }, 0);
    setTotalAmount(totalAmount);
  }, [cartDetails]);

  const navigate = useNavigate();
  const [dates, setDates] = useState({ day: null, month: null, year: null });

  const [addresDetails, setAddresDetails] = useState({
    name: "",
    phone: "",
    pincode: "",
    addresses: "",
    date: "",
    city: "",
    acceptPolicy: false,
  });
  console.log('Address Details:', addresDetails);

  const [digSign, setDigitalSign] = useState('');
  console.log('dig', digSign);
  const [aadharNumber, setAadharNum] = useState('');
  console.log('adar', aadharNumber);

  const [address, setAddress] = useState([]);
  const [selcAddress, setSelcAddress] = useState(null);
  console.log('selcAddress', selcAddress);
  console.log('addres', address);

  const [otp, setOtp] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("dates", dates);

  useEffect(() => {
    today();
    getAddress();
  }, []);

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
  };

  const handleCheck = (e) => {
    const { checked } = e.target;
    console.log(checked);
    if (checked) {
      setAddresDetails({ ...addresDetails, acceptPolicy: true });
    } else {
      setAddresDetails({ ...addresDetails, acceptPolicy: false });
    }
  };

  const getAddress = async () => {
    try {
      const result = await axios.get('http://localhost:3000/get-address', {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      });
      setAddress(result.data.addresses);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddressDetails = async () => {
    const { name, phone, pincode, addresses, date, city, acceptPolicy } = addresDetails;
    console.log('clik');

    if (address.length === 0) {
      if (digSign && aadharNumber && name && phone && pincode && addresses && date && city) {
        console.log(aadharNumber, name, phone, pincode, addresses, date, city, acceptPolicy);
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
        const blob = await fetch(digSign).then((res) => res.blob());
        const file = new File([blob], "signature.png", { type: "image/png" });
        reqBody.append("digSign", file);

        try {
          const result = await axios.post('http://localhost:3000/add-address', reqBody, {
            headers: {
              Authorization: sessionStorage.getItem('token'),
              'Content-Type': 'multipart/form-data',
            },
          });

          if (result.status === 200) {
            toast.success('Address added successfully');
            console.log(result.data);
            setSelcAddress(result.data._id);
            getAddress();

            // Reset form fields
            setAddresDetails({
              name: "",
              phone: "",
              pincode: "",
              addresses: "",
              date: "",
              city: "",
              acceptPolicy: false,
            });
            setDigitalSign('');
            setAadharNum('');
            console.log('Form fields reset:', addresDetails); // Log to verify reset
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        toast.error('Please complete all fields, including signature and Aadhar');
      }
    } else {
      if (name && phone && pincode && addresses && date && city) {
        const reqBody = new FormData();
        reqBody.append("name", name);
        reqBody.append("phone", phone);
        reqBody.append("pincode", pincode);
        reqBody.append("addresses", addresses);
        reqBody.append("date", date);
        reqBody.append("city", city);
        reqBody.append("acceptPolicy", acceptPolicy.toString());

        try {
          const result = await axios.post('http://localhost:3000/add-address', reqBody, {
            headers: {
              Authorization: sessionStorage.getItem('token'),
            },
          });

          console.log(result);

          if (result.status === 200) {
            const data = result.data;
            console.log(data._id);
            getAddress();
            setSelcAddress(result.data._id);
            toast.success('New address added successfully');

            // Reset form fields
            setAddresDetails({
              name: "",
              phone: "",
              pincode: "",
              addresses: "",
              date: "",
              city: "",
              acceptPolicy: false,
            });
            console.log('Form fields reset:', addresDetails); // Log to verify reset
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  return (
    <>
      <div className="">
        <Header/>
        <div className="p-1">
          <div className="p-3 fw-bold text-center bg-secondary">Address Details</div>

          <div>
            {address.length !== 0 && (
              <div>
                <div className="m-2">
                  <SelectAddress address={address} setSelcAddress={setSelcAddress} />
                </div>
                <div className="fw-bold text-info">+Add New</div>
              </div>
            )}
          </div>

          <div className="pt-2">
            <Row className="d-flex border m-3 justify-content-center align-items-between p-3">
              <Col lg={7}>
                <div className="border p-2 rounded shadow">
                  {/* Phone number verification */}
                  <div className="d-flex border p-2 border-dark rounded">
                    <Input
                      disabled={false}
                      placeholder="Mobile number"
                      variant="outlined"
                      className="w-50 m-2 mt-3"
                    />
                    {/* Get OTP */}
                    <Button onClick={handleShow} variant="plain" className="h-25 mt-3" size="sm">
                      Get OTP
                    </Button>
                  </div>

                  <div className="d-flex m-2">
                    <Input
                      placeholder="Name"
                      size="sm"
                      variant="soft"
                      className="w-50 m-1"
                      value={addresDetails.name} // Bind to state
                      onChange={(e) => {
                        setAddresDetails({ ...addresDetails, name: e.target.value });
                      }}
                    />

                    <Input
                      placeholder="Phone"
                      size="sm"
                      variant="soft"
                      className="w-50 m-1"
                      type="number"
                      maxLength={10}
                      value={addresDetails.phone} // Bind to state
                      onChange={(e) => {
                        setAddresDetails({ ...addresDetails, phone: e.target.value });
                      }}
                    />
                  </div>

                  <Row className="d-flex">
                    <Box sx={{ p: 1 }} fontSize={1}>
                      <Textarea
                        placeholder="Address (area and street)"
                        minRows={2}
                        maxRows={4}
                        variant="soft"
                        className="custom-textarea ms-3 me-3"
                        sx={{ fontSize: '14px' }}
                        value={addresDetails.addresses} // Bind to state
                        onChange={(e) => {
                          setAddresDetails({ ...addresDetails, addresses: e.target.value });
                        }}
                      />
                    </Box>
                  </Row>

                  <div className="d-flex ms-2">
                    <Stack spacing={1.5} sx={{ minWidth: 259 }}>
                      <Input
                        type="date"
                        className="ms-1 m-2 w-100 text-secondary"
                        value={addresDetails.date} // Bind to state
                        onChange={(e) => {
                          setAddresDetails({ ...addresDetails, date: e.target.value });
                        }}
                        variant="soft"
                        slotProps={{
                          input: {
                            min: `${dates.year}-${String(dates.month + 1).padStart(2, '0')}-${String(dates.day).padStart(2, '0')}`,
                          },
                        }}
                      />
                    </Stack>

                    <Input
                      placeholder="Pincode"
                      size="sm"
                      variant="soft"
                      className="w-50 m-2"
                      value={addresDetails.pincode} // Bind to state
                      onChange={(e) => {
                        setAddresDetails({ ...addresDetails, pincode: e.target.value });
                      }}
                    />
                  </div>
                  <p className="ms-3 text-info" style={{ fontSize: '12px' }}>
                    Select date when you want to deliver (order before 5 days)
                  </p>

                  <div className="d-flex m-2">
                    <Input
                      placeholder="City / Town"
                      size="sm"
                      variant="soft"
                      className="w-50 ms-2"
                      value={addresDetails.city} // Bind to state
                      onChange={(e) => {
                        setAddresDetails({ ...addresDetails, city: e.target.value });
                      }}
                    />
                  </div>

                  <div className="ms-3 mt-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        checked={addresDetails.acceptPolicy} // Bind to state
                        onClick={(e) => handleCheck(e)}
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault" style={{ fontSize: '12px' }}>
                        I agree to the Terms and Conditions, and my Aadhaar number and Digital signature serve as legal consent
                      </label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end flex-column">
                    <Button onClick={handleAddressDetails} variant="outline-danger m-2 bg-dark text-light" size="sm">
                      Save
                    </Button>
                  </div>
                </div>
              </Col>

              {address.length === 0 && (
                <Col lg={5} className="text-center d-flex flex-column justify-content-center align-items-center">
                  <div className="border rounded w-100 mt-2">
                    <Aadhar setAadharNum={setAadharNum} />
                  </div>
                  <div className="text-center d-flex flex-column rounded border w-100 justify-content-center align-items-center mt-2">
                    <div>Draw your sign</div>
                    <DigitalSign setDigitalSign={setDigitalSign} />
                  </div>
                </Col>
              )}
            </Row>

            <div>
              <SelectPymt totalAmount={totalAmount} cartDetails={cartDetails} selcAddress={selcAddress} />
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="text-center d-flex justify-content-center align-items-center w-100 h-100">
              <OtpInput
                value={otp}
                onChange={setOtp}
                inputType="number"
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{ width: '4rem', height: '4rem' }}
                    className="text-center"
                  />
                )}
              />
            </div>
            <div className="text-center">
              <Button variant="dark" className="m-3">
                Verify
              </Button>
            </div>
          </Modal.Body>
        </Modal>

       
      </div>
    </>
  );
}

export default Address;
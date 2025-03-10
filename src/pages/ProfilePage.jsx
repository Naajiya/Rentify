import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Col, Row } from 'react-bootstrap';
import '../css/ProfileStyle.css';
import avatar from '../assets/avatar.png'
import SERVER_URL from '../../services/serverUrl';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';




function ProfilePage() {

  const [userDetails, setUserDetails] = useState({ username: '', email: '', password: '', phone: '', profile: '' })
  const [userUpDetails, setUserUpDetails] = useState({ username: '', email: '', password: '', phone: '', profile: '' })
  console.log(userDetails)
  const [existingImg, setExistingImg] = useState()
  const [preview, setPreview] = useState()

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      const existingUser = JSON.parse(sessionStorage.getItem('user'))
      setUserDetails({ ...userDetails, username: existingUser?.username, email: existingUser?.email, password: existingUser?.password, phone: existingUser?.phone })
      setUserUpDetails({ ...userDetails, username: existingUser?.username, email: existingUser?.email, password: existingUser?.password, phone: existingUser?.phone })
      setExistingImg(existingUser?.profile)
    }
  }, [])

  useEffect(() => {
    if (userDetails.profile) {
      setPreview(URL.createObjectURL(userDetails.profile))
    } else {
      setPreview("")
    }
  }, [userDetails.profile])


  const handleUpdate = async()=>{
      const {username,email,phone}=userUpDetails
      console.log(sessionStorage.getItem('token'))
       
      if(phone){
        const reqBody=new FormData()

        reqBody.append("username",username)
        reqBody.append("email",email)
        reqBody.append("phone",phone)
        preview ? reqBody.append("profile", profile) : reqBody.append("profile", existingImg)

        try{
          const result=await axios.put('http://localhost:3000/edit-profile', reqBody,{
            headers :{
              Authorization: sessionStorage.getItem('token'),
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(result)
          if(result.status==200){
            console.log(result.data)
          }
        }catch(err){
          console.log(err)
        }
      }
  }

  return (
    <>
      <Header />
      <Row className="pt-5 mt-5" style={{overflow:'hidden'}}>
        <Col lg={4}>
          <div className="m-2 d-flex align-items-center justify-content-center p-3">
            <div className="p-4 border rounded bg-secondary">
              <Row className="align-items-center">
                {/* Profile Image */}
                <Col xs={12} md={6} lg={5} className="d-flex justify-content-start justify-content-md-start mb-3 mb-md-0">
                  <div className="prof-img img-fluid">
                    {!existingImg ? (
                      <img className="img-fluid img-hold" style={{ borderRadius: '50%' }} src={preview || avatar} alt="Profile" />
                    ) : (
                      <img className="img-fluid img-hold" style={{ borderRadius: '50%' }} src={preview || `${SERVER_URL}/uploads/${existingImg}`} alt="Profile" />
                    )}
                  </div>
                </Col>
  
                {/* Profile Details */}
                <Col xs={12} md={6} lg={7} className=" text-md-start">
                  <p className="h4">{userDetails?.username}</p>
                  <p className="text-muted">{userDetails?.email}</p>
                </Col>
              </Row>
            </div>
  
          </div>
        </Col>

        <Col lg={7} className='text-center  d-flex pt-5 border flex-column justify-content-center align-items-center'>
          <h4 className='text-secondary'>Edit Profile</h4>
          <div className="prof-img img-fluid">
            <label>
              <input type='file' onChange={(e) => setUserDetails({ ...userDetails, profile: e.target.files[0] })} style={{ display: 'none' }} />
              {!existingImg ? (
                <img className="img-fluid img-hold" style={{ borderRadius: '50%' }} src={preview || avatar} alt="Profile" />
              ) : (
                <img className="img-fluid img-hold" style={{ borderRadius: '50%' }} src={preview || `${SERVER_URL}/uploads/${existingImg}`} alt="Profile" />
              )}

            </label>
          </div>
          <div>

           <form>
              <FloatingLabel
                controlId="floatingTextarea"
                label="username"
                className="mb-3 w-100 m-3"
                style={{ fontSize: '13px' }}
              >
                <Form.Control
                  value={userUpDetails.username}
                  onChange={(e) => setUserUpDetails({ ...userUpDetails, username: e.target.value })} as="textarea" placeholder="Leave a comment here" />
              </FloatingLabel>
  
              <FloatingLabel
                controlId="floatingTextarea2"
                label="email"
                className="mb-3 w-100 m-3"
                style={{ fontSize: '13px' }}
              >
                <Form.Control
                  value={userUpDetails.email}
                  onChange={(e) => setUserUpDetails({ ...userUpDetails, email: e.target.value })} as="textarea" placeholder="Leave a comment here" />
              </FloatingLabel>
  
              <FloatingLabel
                controlId="floatingInput"
                label="Phone"
                className="mb-3 w-100 m-3"
                style={{ fontSize: '13px' }}
              >
                <Form.Control
                  type="number" // This works for numeric input
                  value={userUpDetails?.phone}
                  onChange={(e) => setUserUpDetails({ ...userUpDetails, phone: e.target.value })}
                  placeholder="Enter your phone number"
                />
              </FloatingLabel>

              <button onClick={handleUpdate} className='btn w-100 btn-dark ms-3' type='button'>edit</button>
  
           </form>

            {/* <p className="h3">{userDetails?.username}</p>
            <p className="text-muted">{userDetails?.email}</p>
            <p style={{ fontFamily: 'normal' }}>{userDetails?.phone ? userDetails.phone : 'not aded'}</p> */}
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ProfilePage;
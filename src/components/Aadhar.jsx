import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useMediaQuery } from '@mui/material';




function Aadhar() {


    const [otp, setOtp] = useState('');
    console.log(otp)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [aadhar,setAadhar]=useState()


    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isSmallScreen ? '90%' : 380,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleSave=()=>{
        setAadhar(otp)
    }

    return (
        <>
            <div>
                <Button onClick={handleOpen} variant="" style={{ fontFamily: 'serif' }}>Enter Aadhar</Button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={modalStyle} >
                    <Typography className='text-center fw-bold'>
                        Enter 12 Digit Aadhar Number
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            inputType='number'
                    
                            numInputs={12}
                            renderSeparator={<span>-</span>}
                            renderInput={(props) => <input {...props}
                                style={{ width: '1.3rem', height: '2rem' }}
                                className='text-center'

                            />}
                        />
                    </Typography>
                    <div onClick={handleSave} className='text-center'><Button className='text-center m-2 ' size='small'  variant="outlined" >Save</Button></div>
                </Box>


              
            </Modal>
        </>
    )
}

export default Aadhar
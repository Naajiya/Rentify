Got it! Given the different fields and roles, it makes sense to have separate schemas for User and Admin. This approach will allow you to manage the data more effectively and apply role-specific operations more easily.

Here's an example of how you could define separate schemas for User and Admin:

User Schema
javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  otp: { type: String },
  otpExpires: { type: Date },
  verified: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
Admin Schema
javascript
const adminSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
Updating the Express Server
Update your server to handle the different routes for users and admins:

javascript
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const generateOtp = require('generate-otp');
const User = require('./models/User');
const Admin = require('./models/Admin');

// Initialize Express
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Route to Register User
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  res.send('User registered successfully');
});

// Route to Send OTP
app.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp.generate(4, { upperCaseAlphabets: false, specialChars: false });
  const hashedOtp = await bcrypt.hash(otp, 10);
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

  const user = await User.findOneAndUpdate(
    { email },
    { otp: hashedOtp, otpExpires, verified: false },
    { upsert: true, new: true }
  );

  // Send the plain OTP (implement your OTP sending logic here)
  console.log(`OTP for ${email}: ${otp}`);
  res.send('OTP sent successfully');
});

// Route to Verify OTP
app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email });

  if (user && user.otpExpires > Date.now() && await bcrypt.compare(otp, user.otp)) {
    user.verified = true;
    await user.save();
    res.send('OTP verified successfully');
  } else if (user && user.otpExpires <= Date.now()) {
    res.status(400).send('OTP has expired');
  } else {
    res.status(400).send('Invalid OTP');
  }
});

// Admin login route
app.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (admin && await bcrypt.compare(password, admin.password)) {
    res.send('Admin logged in successfully');
  } else {
    res.status(400).send('Invalid email or password');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});










app.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;
  const otp = generateOtp.generate(4, { upperCaseAlphabets: false, specialChars: false });

  // Hash the OTP before storing
  const hashedOtp = await bcrypt.hash(otp, saltRounds);

  // Set expiration time to 10 minutes from now
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

  // Save the hashed OTP and expiration time in the database
  const user = await User.findOneAndUpdate(
    { phoneNumber },
    { otp: hashedOtp, otpExpires, verified: false },
    { upsert: true, new: true }
  );

  // Send the plain OTP using SendOtp
  sendOtp.send(phoneNumber, 'YourOtpSenderId', otp, function (error, data) {
    if (error) {
      return res.status(500).send('Failed to send OTP');
    }
    res.send('OTP sent successfully');
  });
});
Check the Expiration Time during OTP verification:

javascript
app.post('/verify-otp', async (req, res) => {
  const { phoneNumber, otp } = req.body;
  const user = await User.findOne({ phoneNumber });

  if (user) {
    // Check if the OTP has expired
    if (user.otpExpires > Date.now() && await bcrypt.compare(otp, user.otp)) {
      user.verified = true;
      await user.save();
      res.send('OTP verified successfully');
    } else if (user.otpExpires <= Date.now()) {
      res.status(400).send('OTP has expired');
    } else {
      res.status(400).send('Invalid OTP');
    }
  } else {
    res.status(400).send('Invalid OTP');
  }
});
This will ensure that the OTP is only valid for a short period (e.g., 10 minutes). After the expiration time has passed, the user will need to request a new OTP.
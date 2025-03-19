const fs = require('fs');
const nodemailer = require('nodemailer');

console.log('Booking appointment...');

// Appointment validation with nextTick (critical validation)
process.nextTick(() => {
  console.log('Validating appointment...');
});

// Simulate I/O operation with fs
fs.writeFile('appointment.txt', 'Patient: John Doe', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('Appointment saved to file.');

  // Log after I/O operation
  setImmediate(() => {
    console.log('File saved - Logging success message.');
  });
});

// Send confirmation email with delay
setTimeout(() => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,  // Use TLS
        auth: {
          user: "avulanarayana.2016@gmail.com",
          pass: "oenvofwhqwruflmq"  
        },
        tls: {
          rejectUnauthorized: false
        }
      });

  const mailOptions = {
    from:"email",
    to:"avulanarayana.2016@gmail.com",
    subject: 'Appointment Confirmation',
    text: 'Your appointment has been booked successfully!'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}, 2000);

console.log('Booking process initiated...');

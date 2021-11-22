const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  secretKey: process.env.JWT_SECERT,
  options: {
    algorithm: process.env.JWT_ALGO,
    expiresIn: '7d',
    issuer: 'dongjay00'
  },
  refreshOptions: {
    algorithm: process.env.JWT_ALGO,
    expiresIn: '14d',
    issuer: 'dongjay00'
  }
};
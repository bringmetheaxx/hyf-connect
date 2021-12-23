const jwt = require('jsonwebtoken');

const enviroment = require('../config');

const secretKey =  enviroment.SECRET_KEY;


function createToken(user) {
  const payload = {
    iss: 'Hack Your Future,HYFConnet',
    userId: `${user.UserID}`,
    username: `${user.FirstName} ${user.LastName}`,
    email: `${user.Email}`,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1),
  };


  const token = jwt.sign(payload, secretKey);

  return token;
}

module.exports = createToken;
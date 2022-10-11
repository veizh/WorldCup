/* eslint-disable semi /
/ eslint-disable no-throw-literal */
const jwt = require('jsonwebtoken');
const path = require('path');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodeToken = jwt.verify(token,'shhhhh');
    // @ts-ignore
    const userId = decodeToken.id;
        if(userId){
        req._id = userId;
        }
      next();
    
  } catch (error) {
    // console.log(error);
    return res.status(401).json({ error: 'Auth error!' });
    // if (!CallbackError) return;
    // return CallbackError();
  }
};
const { StatusCodes } = require('http-status-codes');
const {
  getUserRefreshToken,
} = require('../../../services/mongoose/refreshToken');

const index = async (req, res, next) => {
  try {
    const result = await getUserRefreshToken(req);

    res.status(StatusCodes.OK).json({
      data: { token: result },
    });
  } catch (error) {
    console.log('error');
    console.log(error);
    next(error);
  }
};

module.exports = { index };

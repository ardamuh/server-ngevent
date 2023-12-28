const {
  createOrganizer,
  createUsers,
  getAllUsers,
  deleteOrganizer,
  updateOrganizer,
  getOneOrganizer,
} = require('../../../services/mongoose/users');

const { StatusCodes } = require('http-status-codes');

const getCMSUsers = async (req, res, next) => {
  try {
    const result = await getAllUsers(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createCMSOrganizer = async (req, res, next) => {
  try {
    const result = await createOrganizer(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getOneCMSOrganizer = async (req, res, next) => {
  try {
    const result = await getOneOrganizer(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateCMSOrganizer = async (req, res, next) => {
  try {
    const result = await updateOrganizer(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const destroyCMSOrganizer = async (req, res, next) => {
  try {
    const result = await deleteOrganizer(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createCMSUser = async (req, res, next) => {
  try {
    const result = await createUsers(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCMSOrganizer,
  createCMSUser,
  getCMSUsers,
  destroyCMSOrganizer,
  updateCMSOrganizer,
  getOneCMSOrganizer,
};

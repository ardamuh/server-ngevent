// import services organizers
const {
  createOrganizer,
  createUsers,
  getAllUsers,
  deleteOrganizer,
  updateOrganizer,
  getOneOrganizer,
} = require("../../../services/mongoose/users");

const { StatusCodes } = require("http-status-codes");

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

// function create
const createCMSOrganizer = async (req, res, next) => {
  try {
    // simpan organizer yang baru dibuat ke MongoDB
    const result = await createOrganizer(req);

    //response kepada client dengan mengembalikan product yang baru dibuat
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    // jika terjadi kesalahan kemudian gunakan method `next` agar Express memproses error tersebut
    next(error);
  }
};

// funciton menampilkan daftar organizer berdasarkan id
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

// function mengedit daftar organizer berdasarkan id
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

// function menghapus daftar organizer berdasarkan id
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

// function create CMSUser
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

// Export function pada controller CMS
module.exports = {
  createCMSOrganizer,
  createCMSUser,
  getCMSUsers,
  destroyCMSOrganizer,
  updateCMSOrganizer,
  getOneCMSOrganizer,
};

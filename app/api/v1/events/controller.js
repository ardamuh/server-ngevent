// import services categories
const {
  getAllEvents,
  getOneEvents,
  updateEvents,
  createEvents,
  deleteEvents,
  changeStatusEvents,
} = require("../../../services/mongoose/events");

const { StatusCodes } = require("http-status-codes");

// function create
const create = async (req, res, next) => {
  try {
    // simpan events yang baru dibuat ke MongoDB
    const result = await createEvents(req);

    // response kepada client dengan mengembalikan product yang baru dibuat
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    // jika terjadi kesalahan kemudian gunakan method `next` agar Express memproses error tersebut
    next(err);
  }
};

// function menampilkan semua daftar events
const index = async (req, res, next) => {
  try {
    const result = await getAllEvents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// function menampilkan daftar events berdasarkan id
const find = async (req, res, next) => {
  try {
    const result = await getOneEvents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// function mengedit daftar events berdasarkan id
const update = async (req, res, next) => {
  try {
    const result = await updateEvents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// function menghapus daftar categories berdasarkan id
const destroy = async (req, res, next) => {
  try {
    const result = await deleteEvents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// function mengubah status events
const changeStatus = async (req, res, next) => {
  try {
    const result = await changeStatusEvents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Export function pada controller events
module.exports = {
  index,
  find,
  update,
  destroy,
  create,
  changeStatus,
};

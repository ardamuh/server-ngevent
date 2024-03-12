const { StatusCodes } = require("http-status-codes");
// import services payments
const {
  getAllPayments,
  createPayments,
  getOnePayments,
  updatePayments,
  deletePayments,
} = require("../../../services/mongoose/payments");

// function create
const create = async (req, res, next) => {
  try {
    // simpan payments yang baru dibuat ke MongoDB
    const result = await createPayments(req);

    // response kepada client dengan mengembalikan product yang baru dibuat
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    // jika terjadi kesalahan kemudian gunakan method `next` agar Express memproses error tersebut
    next(err);
  }
};

// function menampilkan semua daftar payments
const index = async (req, res, next) => {
  try {
    const result = await getAllPayments(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// function menampilkan daftar payments berdasarkan id
const find = async (req, res, next) => {
  try {
    const result = await getOnePayments(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// function mengedit daftar payments berdasarkan id
const update = async (req, res, next) => {
  try {
    const result = await updatePayments(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// function menghapus daftar payments berdasarkan id
const destroy = async (req, res, next) => {
  try {
    const result = await deletePayments(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Export function pada controller payments
module.exports = {
  index,
  find,
  update,
  destroy,
  create,
};

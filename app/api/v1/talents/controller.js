// import services talents
const {
  getAllTalents,
  getOneTalents,
  updateTalents,
  createTalents,
  deleteTalents,
} = require("../../../services/mongoose/talents");

const { StatusCodes } = require("http-status-codes");

// function create
const create = async (req, res, next) => {
  try {
    // simpan talent yang baru dibuat ke MongoDB
    const result = await createTalents(req);

    // respons kepada client dengan mengembalikan product yang baru dibuat
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    // jika terjadi kesalahan kemudian gunakan method `next` agar Express memproses error tersebut
    next(error);
  }
};

// function menampilkan semua daftar talents
const index = async (req, res, next) => {
  try {
    const result = await getAllTalents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// function menampilkan daftar talents berdasarkan id
const find = async (req, res, next) => {
  try {
    const result = await getOneTalents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// function mengedit daftar talents berdasarkan id
const update = async (req, res, next) => {
  try {
    const result = await updateTalents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// function menghapus daftar talents berdasarkan id
const destroy = async (req, res, next) => {
  try {
    const result = await deleteTalents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// export function pada controller talents
module.exports = {
  index,
  find,
  update,
  destroy,
  create,
};

const { StatusCodes } = require("http-status-codes");
// import services categories
const {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
} = require("../../../services/mongoose/categories");

// function create
const create = async (req, res, next) => {
  try {
    // simpan category yang baru dibuat ke MongoDB
    const result = await createCategories(req);

    //response kepada client dengan mengembalikan product yang baru dibuat
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    // jika terjadi kesalahan kemudian gunakan method `next` agar Express memproses error tersebut
    next(error);
  }
};

// function menampilkan semua daftar categories
const index = async (req, res, next) => {
  try {
    const result = await getAllCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// function menampilkan daftar categories berdasarkan id
const find = async (req, res, next) => {
  try {
    const result = await getOneCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// function mengedit daftar categories berdasarkan id
const update = async (req, res, next) => {
  try {
    const result = await updateCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// function menghapus daftar categories berdasarkan id
const destroy = async (req, res, next) => {
  try {
    const result = await deleteCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Export function pada controller categories
module.exports = { index, find, update, destroy, create };

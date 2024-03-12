// import services participants
const {
  signupParticipant,
  activateParticipant,
  signinParticipant,
  getAllEvents,
  getOneEvents,
  getAllOrders,
  checkoutOrder,
  getAllPaymentByOrganizer,
} = require("../../../services/mongoose/participant");

const { StatusCodes } = require("http-status-codes");

// function untuk create akun participants
const signup = async (req, res, next) => {
  try {
    // simpan participants yang baru dibuat ke MongoDB
    const result = await signupParticipant(req);

    //response kepada client dengan mengembalikan product yang baru dibuat
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    // jika terjadi kesalahan kemudian gunakan method `next` agar Express memproses error tersebut
    next(error);
  }
};

// function untuk mengaktifkan akun participant dengan mengirim kode OTP
const activeParticipant = async (req, res, next) => {
  try {
    const result = await activateParticipant(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// funciton login akun participant
const signin = async (req, res, next) => {
  try {
    const result = await signinParticipant(req);

    res.status(StatusCodes.OK).json({
      data: { token: result },
    });
  } catch (error) {
    next(error);
  }
};

// function menampilkan halaman landing
const getAllLandingPage = async (req, res, next) => {
  try {
    const result = await getAllEvents(res);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// function menampilkan halaman dashboard
const getDashboard = async (req, res, next) => {
  try {
    const result = await getAllOrders(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// function menampilkan salah satu event
const getDetailLandingPage = async (req, res, next) => {
  try {
    const result = await getOneEvents(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// function checkout event
const checkout = async (req, res, next) => {
  try {
    const result = await checkoutOrder(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// function menampilkan daftar payments
const getAllPayment = async (req, res, next) => {
  try {
    const result = await getAllPaymentByOrganizer(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Export function pada controller participants
module.exports = {
  signup,
  activeParticipant,
  signin,
  getAllLandingPage,
  getDetailLandingPage,
  getDashboard,
  checkout,
  getAllPayment,
};

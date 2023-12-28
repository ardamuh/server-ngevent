const Users = require('../../api/v1/users/model');
const Organizers = require('../../api/v1/organizers/model');
const { BadRequestError, NotFoundError } = require('../../errors');

const createOrganizer = async (req) => {
  const { organizer, role, email, password, confirmPassword, name } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError('Password dan Konfirmasi password tidak cocok');
  }

  const check = await Users.findOne({
    email,
  });
  if (check) throw new BadRequestError('Email duplikat');

  const result = await Organizers.create({ organizer });

  const users = await Users.create({
    email,
    name,
    password,
    organizer: result._id,
    role,
  });

  delete users._doc.password;

  return users;
};

const getOneOrganizer = async (req) => {
  const { id } = req.params;

  const result = await Users.findOne({
    _id: id,
  })
    // .populate({
    //   path: 'image',
    //   select: '_id name',
    // })

    .select('_id name email password ');

  if (!result)
    throw new NotFoundError(`Tidak ada organizers dengan id :  ${id}`);

  return result;
};

const updateOrganizer = async (req) => {
  const { id } = req.params;
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError('Password dan Konfirmasi password tidak cocok');
  }

  const check = await Users.findOne({
    email,
    _id: { $ne: id },
  });

  // apa bila check true / data talents sudah ada maka kita tampilkan error bad request dengan message pembicara sudah terdaftar
  if (check) throw new BadRequestError('Email sudah terdaftar');

  const result = await Users.findOneAndUpdate(
    { _id: id },
    { name, email, password, confirmPassword },
    { new: true, runValidators: true }
  );

  if (!result)
    throw new NotFoundError(`Tidak ada organizer dengan id :  ${id}`);

  return result;
};

const deleteOrganizer = async (req) => {
  const { id } = req.params;

  const result = await Users.findOne({
    _id: id,
  });

  if (!result)
    throw new NotFoundError(`Tidak ada organizer dengan id :  ${id}`);

  await result.remove();

  return result;
};

const createUsers = async (req, res) => {
  const { name, email, password, role, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError('Password dan Konfirmasi password tidak cocok');
  }

  const result = await Users.create({
    name,
    email,
    organizer: req.user.organizer,
    password,
    role,
  });

  return result;
};

const getAllUsers = async (req) => {
  const result = await Users.find();

  return result;
};

module.exports = {
  createOrganizer,
  createUsers,
  getAllUsers,
  deleteOrganizer,
  updateOrganizer,
  getOneOrganizer,
};

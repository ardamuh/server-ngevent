// import router dari express
const express = require("express");
const router = express();
const { index, create, find, update, destroy } = require("./controller");

// import product controller
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

// pasangkan route endpoint dengan method 'authenticateUser', 'authorizeRoles'
router.get("/categories", authenticateUser, authorizeRoles("organizer"), index);
router.get(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  find
);
router.put(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
router.delete(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);
router.post(
  "/categories",
  authenticateUser,
  authorizeRoles("organizer"),
  create
);

// export router
module.exports = router;

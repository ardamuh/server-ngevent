// import router dari express
const express = require("express");
const router = express();
const {
  create,
  destroy,
  find,
  index,
  update,
  changeStatus,
} = require("./controller");

// import product controller
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

// pasangkan route endpoint dengan method 'authenticateUser', 'authorizeRoles'
router.get(
  "/events",
  authenticateUser,
  authorizeRoles("organizer", "owner"),
  index
);
router.get("/events/:id", authenticateUser, authorizeRoles("organizer"), find);
router.put(
  "/events/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
router.delete(
  "/events/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);
router.post("/events", authenticateUser, authorizeRoles("organizer"), create);

router.put(
  "/events/:id/status",
  authenticateUser,
  authorizeRoles("organizer"),
  changeStatus
);

// export router
module.exports = router;

const { Router } = require("express");
const {
  userLogin,
  createNewUser,
  refreshToken,
} = require("../controllers/auth");

const router = Router();

router.post("/", userLogin);
router.post("/new", createNewUser);
router.get("/refresh", refreshToken);

module.exports = router;

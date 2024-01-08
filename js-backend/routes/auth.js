const { Router } = require("express");
const {
  userLogin,
  createNewUser,
  refreshToken,
} = require("../controllers/auth");
const { check } = require("express-validator");

const router = Router();

router.post(
  "/",
  [
    //middlewares
    check("email", "A valid email is required").isEmail(),
    check(
      "password",
      "The password must be at least 6 characters long"
    ).isLength({ min: 6 }),
  ],
  userLogin
);
router.post(
  "/new",
  [
    //middlewares
    check("name", "The name is required").not().isEmpty(),
    check("email", "A valid email is required").isEmail(),
    check(
      "password",
      "The password must be at least 6 characters long"
    ).isLength({ min: 6 }),
  ],
  createNewUser
);
router.get("/refresh", refreshToken);

module.exports = router;

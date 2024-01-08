const { response } = require("express");
const { validationResult } = require("express-validator");
const userLogin = (req, res = response) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }
  res.status(201).json({
    ok: true,
    msg: "user logged in",
    email,
    password,
  });
};

const createNewUser = (req, res = response) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }
  res.status(201).json({
    ok: true,
    msg: "new user created",
    name,
    email,
    password,
  });
};

const refreshToken = (req, res = response) => {
  res.json({
    ok: true,
  });
};

module.exports = {
  userLogin,
  createNewUser,
  refreshToken,
};

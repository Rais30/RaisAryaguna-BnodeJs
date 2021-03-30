const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const authController = require("../controllers/auth");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("input email yang anda bukam email"),
    body("password")
      .isLength({ min: 8 })
      .matches(/\d/)
      .withMessage(
        "input password yang anda masuk kan kurang dari 8 dan mengandung anggka"
      ),
    body("nomer")
      .isLength({ min: 11 })
      .isNumeric()
      .withMessage("Nomer yang anda masukan bukan anggaka dan kurang dari 11"),
    body("passwordConvirmation").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation does not match password");
      }

      // Indicates the success of this synchronous custom validator
      return true;
    }),
  ],
  authController.register
);
module.exports = router;

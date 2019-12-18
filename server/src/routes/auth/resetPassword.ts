import { Router, Response, Request } from 'express';
import FindUser from '../../database/user/findUsers';
import mongoose = require("mongoose");
const Users = mongoose.model("users");
const bcrypt = require("bcryptjs");
const cuid = require("cuid");

const router: Router = Router();
const findUser: FindUser = new FindUser();

router.post("/api/resetPassword", async (req, res) => {
  let { token, password } = req.body;

  try {
    const response = await findUser.findUserByTokenAndResetPassword(token, password);

    return res.json(response);
  } catch (err) {
    console.error(err.message);
  }
});

export default router;

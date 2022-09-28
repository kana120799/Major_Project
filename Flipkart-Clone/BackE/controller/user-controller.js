import userModel from "../schema/userSchema.js";
import bcrypt from "bcrypt";

export const userLogIn = async (req, res) => {
  try {
    const EmailorMobile = req.body.username;
    const Passwordd = req.body.password;
    let user = await userModel.findOne({
      $or: [{ email: EmailorMobile }, { phone: EmailorMobile }],
    });
    // MAtch Encrypted Password
    const match = await bcrypt.compare(Passwordd, user.password);
    console.log("Match", match);
    if (match) {
      return res.status(200).json(`${user.username}`);
    } else {
      return res.status(401).json("Invalid Login");
    }
  } catch (error) {
    res.status(500).json("Error: from UserLOgin controller ", error.message);
  }
};

export const userSignUp = async (req, res) => {
  try {
    const exist = await userModel.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json({ message: "User already exist" });
    }
    const user = req.body;
    const newUser = new userModel(user);

    await newUser.save();

    res.status(200).json({ mesage: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

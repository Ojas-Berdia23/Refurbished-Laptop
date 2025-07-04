const User = require("../models/users");
const {
  generateToken,
  hashPassword,
  comparePasswords,
} = require("../auth/auth");

const registerUser = async ({ name, email, password, role = "client" }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists");
  const hashed = await hashPassword(password);
  const user = await User.create({
    name,
    email,
    password: hashed,
    role: role || "client",
  });

  return { token: generateToken(user), user };
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await comparePasswords(password, user.password)))
    throw new Error("Invalid credentials");
  return { token: generateToken(user), user };
};

module.exports = { registerUser, loginUser };
// User service logic

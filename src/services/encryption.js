import bcrypt from "bcryptjs";

const saltRounds = 10;

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
}

async function comparePassword(password, hash) {
  return bcrypt.compare(password, hash);
}

export { hashPassword, comparePassword };

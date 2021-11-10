import bcrypt from "bcryptjs";

const password = "password";
const salt = await bcrypt.genSalt(10);

const getHash = async (password) => {
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
getHash(password).then((data) => {
  console.log(data);
});

const hashed = "$2a$10$9VMeqow9rLYBTY9z80fnzutXo6zaczCJDO7JICMwBvozipzBZYkEa";

const compareHash = async (password) => {
  const result = await bcrypt.compare(password, hashed);
  return result;
};
compareHash(password).then((data) => {
  console.log(data);
});

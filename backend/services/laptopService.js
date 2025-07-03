const laptops = require("../models/laptops");

const createLaptop = async (data, userId) => {
  return await laptops.create({ ...data, createdBy: userId });
};

const getLaptop = async () => {
  return await laptops.find().populate("createdBy", "name email");
};

const getLaptopById = async (id) => {
  return await laptops.findById(id).populate("createdBy", "name email");
};

const updateLaptop = async (id, data) => {
  return await laptops.findByIdAndUpdate(id, data, { new: true });
};

const deleteLaptop = async (id) => {
  return await laptops.findByIdAndDelete(id);
};

module.exports = {
  createLaptop,
  getLaptop,
  getLaptopById,
  updateLaptop,
  deleteLaptop,
};
// laptops service logic

const laptops = require("../models/laptop");

const createLaptop = async (data, userId) => {
  return await laptops.create({ ...data, createdBy: userId });
};

const getLaptop = async (queryParams = {}) => {
  const queryObj = {};

  if (queryParams.brand) queryObj.brand = queryParams.brand;
  if (queryParams.Condition) queryObj.Condition = queryParams.Condition;
  if (queryParams.Processor) queryObj.Processor = queryParams.Processor;
  if (queryParams.RAM) queryObj.RAM = queryParams.RAM;
  if (queryParams.Storage) queryObj.Storage = queryParams.Storage;

  let query = laptops.find(queryObj).populate({
    path: "createdBy",
    select: "name email",
  });

  if (queryParams.sort) {
    const sortBy = queryParams.sort.split(",").join(" ");
    query = query.sort(sortBy); // e.g., 'Price' or '-Price'
  } else {
    query = query.sort("-createdAt"); // default sort
  }

  return await query;
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

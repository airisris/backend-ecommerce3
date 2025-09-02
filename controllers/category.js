const axios = require("axios");

const Category = require("../models/category");

const getCategories = async () => {
  const categories = await Category.find().sort({ _id: -1 });
  return categories;
};

const getCategory = async (id) => {
  const category = await Category.findById(id);
  return category;
};

const addNewCategory = async (label) => {
  // create new category in mongodb
  const newCategory = new Category({
    label,
  });
  await newCategory.save();

  // return category with the billplz url
  return {
    ...newCategory,
  };
};

const updateCategory = async (id, label) => {
  const updateCategory = await Category.findByIdAndUpdate(
    id,
    {
      label,
    },
    { new: true }
  );
  return updateCategory;
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

module.exports = {
  getCategories,
  getCategory,
  addNewCategory,
  updateCategory,
  deleteCategory,
};

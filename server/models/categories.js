import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  categoryName: String,
  categoryImage: String,
});

const Categories = mongoose.model("Categories", categorySchema);

export default Categories;

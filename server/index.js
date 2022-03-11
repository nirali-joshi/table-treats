import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import categoryRoutes from "./routes/categories.js";

const app = express();
app.use(express.json({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use("/categories", categoryRoutes);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors({ origin: "http://localhost:3000" }));

const CONNECTION_URL =
  "mongodb+srv://tt-admin:o6iYJUjuRVNwSHs8@cluster0.cscea.mongodb.net/tableTreatsDB";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((err) => console.error(err));

//   {"_id":{"$oid":"62236f32412f50fd6d14148b"},"categoryName":"Thick Shake","categoryImage":"https://12t.greatlifepublishing.net/wp-content/uploads/sites/2/2014/10/shake.jpg"}
//   {"_id":{"$oid":"622370c6412f50fd6d14148e"},"categoryName":"Chinese","categoryImage":"http://www.blog.sagmart.com/wp-content/uploads/2015/07/Hakka-Noodles.jpg"}
//   {"_id":{"$oid":"62237121412f50fd6d14148f"},"categoryName":"Bangali Sweets","categoryImage":"https://4.imimg.com/data4/IJ/JR/MY-11458628/spongy-rasgulla-500x500.jpg"}
//   {"_id":{"$oid":"6223715b412f50fd6d141490"},"categoryName":"Breakfast","categoryImage":"http://yesofcorsa.com/wp-content/uploads/2017/11/4K-Pancakes-Photo.jpg"}
//   {"_id":{"$oid":"62237185412f50fd6d141491"},"categoryName":"Punjabi","categoryImage":"https://i.ytimg.com/vi/0X1onzAOUc4/maxresdefault.jpg"}
//   {"_id":{"$oid":"622371dc412f50fd6d141492"},"categoryName":"Fruit Dish","categoryImage":"https://bakerish.com/wp-content/uploads/2021/04/FRUIT-SALSA-2.webp"}

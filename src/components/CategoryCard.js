import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ categoryData }) => {
  const { categoryName, categoryImage } = categoryData;
  return (
    <div className="category-card">
      <img src={categoryImage} alt={categoryName} />
      <div className="category-name">
        <Link
          to={`category/${categoryName.trim().replace(/\s+/g, "-")}`}
          className="link"
        >
          <span>{categoryName}</span>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;

import React, { useEffect, useState } from "react";
import { map } from "lodash";
import { connect } from "react-redux";
import { getCategories } from "../actions";
import CategoryCard from "./CategoryCard";

const Home = (props) => {
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getCategoriesData = () => {
    setCategoryData(true);
    props
      .getCategories()
      .then((resp) => {
        if (resp) {
          const data = map(resp, (item) => {
            const obj = { ...item, id: item._id };
            delete obj._id;
            return obj;
          });
          setCategoryData(data);
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loadind data...</p>}
      <div className="categories">
        {map(categoryData, (item, index) => (
          <CategoryCard categoryData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

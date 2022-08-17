import axios from "axios";
import React, { useState, useEffect } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines/sources?apiKey=710a8d822eb14b20b65ac4f821e9fa80"
      )
      .then((res) => setCategory(res.data.sources));
  }, []);

  console.log(category);

  return <div>Category</div>;
};

export default Category;

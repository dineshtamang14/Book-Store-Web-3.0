import React from "react";
import { Button, Layout } from "antd";
import { useLocation } from "react-router";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Rating from "../components/Rating";
import PriceRanges from "../components/PriceRanges";
import Results from "../components/Results";
import axios from "../axios";

const { Sider, Content } = Layout;

const Categories = () => {
  const { state: category } = useLocation();
  const [rating, setRating] = useState(1);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/products?search=${category}`);
      setBooks(request.data.Books);
    }
    fetchData();
  }, [category]);

  console.log(category);

  return (
    <>
      <div className="container">
        <Header />
        <div className="results-header">
          <span>Showing Poducts for </span>
          <span className="category">"{category}"</span>
        </div>

        <Layout>
          <Sider width="340px" theme="light" style={{ padding: "25px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Rating rating={rating} setRating={setRating} />
              <PriceRanges
                priceMin={priceMin}
                setPriceMin={setPriceMin}
                priceMax={priceMax}
                setPriceMax={setPriceMax}
              />
              <Button className="login">Apply Filters</Button>
            </div>
          </Sider>

          <Content
            theme="light"
            style={{ padding: "35px", backgroundColor: "white" }}
          >
            <h1 style={{ fontSize: "30px" }}>RESULTS</h1>
            <Results
              // category={category}
              // rating={rating}
              // priceMin={priceMin}
              // priceMax={priceMax}
              books={books}
            />
          </Content>
        </Layout>
      </div>
    </>
  );
};

export default Categories;

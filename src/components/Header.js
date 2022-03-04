import { PageHeader, Button, Input, Space, Badge } from "antd";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import "./Header.css";
// import Amazon from "../images/logo.png";
// import USA from "../images/usa.png";
import BookStore from "../images/bookstore.png";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Search } = Input;
const categories = [
  "Python",
  "Mongodb",
  "PHP",
  "Engineering",
  "MySQL",
  "Linux",
  "DSA",
];

const Header = () => {
  const { authenticate, account } = useMoralis();
  const [search, setSearch] = useState("");
  const [next, setNext] = useState(false);
  console.log(search);

  const searchBook = (e) => {
    e.preventDefault();
    setNext(true);
  };

  return (
    <div className="site-page-header-ghost-wrapper">
      <div className="header">
        <PageHeader
          ghost={false}
          extra={[
            <>
              <Link to="/">
                <img src={BookStore} className="logo" alt="logo"></img>
              </Link>
              {/* <img src={BookStore} className="logo"></img> */}
              <form className="searchBar">
                <Search
                  placeholder="Find A Product"
                  enterButton
                  className="searchBar"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
                <button type="button" onSubmit={searchBook} hidden />
              </form>
              <Button
                className="login header-btn"
                key="1"
                type="primary"
                onClick={() => authenticate()}
              >
                {account ? (
                  <span>{account.slice(0, 5)}...</span>
                ) : (
                  <span>login</span>
                )}
              </Button>
              <div className="header-cart">
                <Space size={"large"}>
                  <Badge count={0} showZero>
                    <span className="header-buttons">
                      <ShoppingCartOutlined className="header-icon" />
                      Cart
                    </span>
                  </Badge>
                  {/* <Space className="header-buttons" size={"small"}>
                <img src={USA} alt="region" className="flag"></img>▾
              </Space> */}
                </Space>
              </div>
            </>,
          ]}
        ></PageHeader>
      </div>

      <div className="site-page-subheader-ghost-wrapper">
        <Space size={"middle"}>
          <Space size={"small"} style={{ fontWeight: "bold" }}>
            <MenuOutlined />
            Categories
          </Space>
          {categories.map((e) => {
            return (
              <Link to="/categories" state={e} className="categories">
                {e}
              </Link>
            );
          })}
        </Space>
      </div>
    </div>
  );
};

export default Header;

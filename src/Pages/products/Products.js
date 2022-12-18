import React from "react";
import Search from "../../common/search/Search";
import Announcement from "../../components/announcement/Announcement";
import Filters from "../../components/filters/Filters";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import { CartState } from "../../context/Context";
import "./products.css";

const Products = () => {
  const {
    state: { products },
    productState: { type, searchQuery, color, gender, price },
  } = CartState();
  const transformProducts = () => {
    let sortedProducts = products;
    if (type) {
      sortedProducts = sortedProducts.filter((item) => item["type"] === type);
    }

    if (color) {
      sortedProducts = sortedProducts.filter((item) => item["color"] === color);
    }

    if (gender) {
      sortedProducts = sortedProducts.filter(
        (item) => (item["gender"] = gender)
      );
    }

    if (price) {
      sortedProducts = sortedProducts.filter((item) => {
        if (price === 450) {
          return item["price"] > 450;
        } else if (price === 251) {
          return item["price"] >= 251 && item["price"] <= 450;
        } else if (price === 0) {
          return item["price"] >= 0 && item["price"] <= 250;
        }
      });
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((item) => {
        const concatval =
          item["name"] + " " + item["color"] + " " + item["type"];
        return concatval.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }

    return sortedProducts;
  };

  return (
    <>
      <Announcement />
      <Navbar displayCart={true} />
      <div className="product-container">
        <div className="product-wrapper">
          <div className="filters">
            <Filters data={products} />
          </div>
          <div className="product-search-wrapper">
            <div className="search-wrapper">
              <Search />
            </div>

            <div className="products">
              {products &&
                products.length > 0 &&
                transformProducts().map((item) => (
                  <Product item={item} key={item.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;

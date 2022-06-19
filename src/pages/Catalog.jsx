import React, { useCallback, useState, useEffect, useRef } from "react";
import Helmet from "../components/Helmet";
import Grid from "../components/Grid";

import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";
import category from "../assets/fake-data/category";
import colors from "../assets/fake-data/product-color";
import size from "../assets/fake-data/product-size";

import CheckBox from "../components/CheckBox";
import Button from "../components/Button";
import InfinityList from "../components/InfinityList";

const Catalog = () => {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };

  const [searchItem, setSearchItem] = useState("")

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };

  const clearFilter = () => setFilter(initFilter);

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }

    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle("active");

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);  
  }

  return (
    <Helmet title="Product">
      <div className="catalog">
        <div className={`catalog__filter ${isActive ? 'active' : ''}`}>
          <div className="catalog__filter__close" onClick={() => handleToggle()}>
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Search</div>
            <div className="catalog__filter__widget__content">
              <div className="catalog__filter__widget__content__search">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <i className="bx bx-search"></i>
              </div>
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Catagory</div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <CheckBox
                  label={item.display}
                  onChange={(input) =>
                    filterSelect("CATEGORY", input.checked, item)
                  }
                  checked={filter.category.includes(item.categorySlug)}
                />
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Color</div>
            <div className="catalog__filter__widget__content">
              {colors.map((item, index) => (
                <CheckBox
                  label={item.display}
                  onChange={(input) =>
                    filterSelect("COLOR", input.checked, item)
                  }
                  checked={filter.color.includes(item.color)}
                />
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Memory Size</div>
            <div className="catalog__filter__widget__content">
              {size.map((item, index) => (
                <CheckBox
                  label={item.display}
                  onChange={(input) =>
                    filterSelect("SIZE", input.checked, item)
                  }
                  checked={filter.size.includes(item.size)}
                />
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button onClick={clearFilter}>Delete Filter</Button>
            </div>
          </div>
          
        </div>
        <div className="catalog__filter__toggle">
            <Button onClick={() => handleToggle()}>
              Filter
            </Button>
          </div>
        <div className="catalog__content">
          {/* <Grid col={3} mdCol={2} smCol={1} gap={20}>
            {products.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.img}
                banner="New"
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid> */}
          <InfinityList data={products} searchItem={searchItem} />
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Helmet from "../components/Helmet";
import productData from "../assets/fake-data/products";
import ProductDetail from "../components/ProductDetail";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import ProductCard from "../components/ProductCard";
import Grid from "../components/Grid";



const Product = (props) => {
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  const relatedProducts = productData.getProducts(4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductDetail product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.img}
                banner="Related"
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

Product.propTypes = {};

export default Product;

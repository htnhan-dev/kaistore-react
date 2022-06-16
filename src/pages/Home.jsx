import React from "react";
import Helmet from "../components/Helmet";
import heroSliderData from "../assets/fake-data/hero-slider";
import HeroSlider from "../components/HeroSlider";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import policy from "../assets/fake-data/policy";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import productData from "../assets/fake-data/products";
import Banner from "../components/Banner";
import FeedBack from "../components/FeedBack";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* HeroSlider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
      {/* Wrapper */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <Wrapper
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      {/* New Product */}
      <Section>
        <SectionTitle>New Arrivals</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {
              productData.getProducts(4).map((item, index) => (
                <ProductCard
                  key={index}
                  banner="New"
                  img01={item.image01}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
      
      <Banner />

      {/* Top Rated */}
      <Section>
        <SectionTitle>Sales</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {
              productData.getProducts(4).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  banner="Sale"
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))
            }
          </Grid>
        </SectionBody>
      </Section>

      {/* Featured */}
      <Section>
        <SectionTitle>Featured</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {
              productData.getProducts(4).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  banner="Hot"
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))
            }
          </Grid>
        </SectionBody>
      </Section>

      {/* FeedBack Client */}
      <FeedBack />
    </Helmet>
  );
};

export default Home;

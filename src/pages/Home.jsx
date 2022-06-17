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

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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

      <Tabs>
        <Section>
          <TabList>
            <Tab><SectionTitle>New Arrivals</SectionTitle></Tab>
            <Tab><SectionTitle>Top Rated</SectionTitle></Tab>
            <Tab><SectionTitle>Featured</SectionTitle></Tab>
          </TabList>

          <TabPanel>
            <SectionBody>
              <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {
                  productData.getProducts(8).map((item, index) => (
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
          </TabPanel>
          <TabPanel>
            <SectionBody>
              <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {
                  productData.getProducts(8).map((item, index) => (
                    <ProductCard
                      key={index}
                      banner="Sale"
                      img01={item.image01}
                      name={item.title}
                      price={Number(item.price)}
                      slug={item.slug}
                    />
                  ))
                }
              </Grid>
            </SectionBody>
          </TabPanel>
          <TabPanel>
            <SectionBody>
              <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {
                  productData.getProducts(8).map((item, index) => (
                    <ProductCard
                      key={index}
                      banner="Hot"
                      img01={item.image01}
                      name={item.title}
                      price={Number(item.price)}
                      slug={item.slug}
                    />
                  ))
                }
              </Grid>
            </SectionBody>
          </TabPanel>
        </Section>
      </Tabs>
      
      <Banner />

      {/* Top Rated */}
      {/* <Section>
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
      </Section> */}

      {/* Featured */}
      {/* <Section>
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
      </Section> */}

      {/* FeedBack Client */}
      <FeedBack />
    </Helmet>
  );
};

export default Home;
